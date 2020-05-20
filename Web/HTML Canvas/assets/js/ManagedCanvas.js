class ManagedCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.lineArray = [];
        this.buttons = [];
        this.managedObjects = [];
        this.activeObject = null;
        this.maxLayers = 1;        
        this.activeColor = "red";
        this.latestTap = new Date();
        this.verticalOffset = canvas.getBoundingClientRect().top + window.scrollY;

        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.canvas.addEventListener("click", (event) => {
            var now = new Date().getTime();
            var delta = now - this.latestTap;

            if (delta < 300) {
                this.lineArray = [];
                this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            this.buttons.forEach((button) => {
                if (event.pageX >= button.posX - button.radius
                    && event.pageX <= button.posX + button.radius
                    && event.pageY - this.verticalOffset >= button.posY - button.radius
                    && event.pageY - this.verticalOffset <= button.posY + button.radius) {
                    this.activeColor = button.color;
                    button.recentlyPressed = true;
                }
            });

            this.latestTap = new Date().getTime();
        });

        this.canvas.addEventListener("touchstart", (event) => {
            // make only one object clickable at a time
            if(this.activeObject == null)
                for(let object of this.managedObjects){
                    if(this.ctx.isPointInPath(object.path, event.changedTouches[0].clientX, event.changedTouches[0].clientY - this.verticalOffset)){
                        object.toggleColor();
                        this.activeObject = object;
                        break;
                    }
                }

            this.lineArray.push({
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
                color: this.ctx.strokeStyle,
                draw: false // moveto
            });
        }, true);

        this.canvas.addEventListener("touchmove", (event) => {
            event.preventDefault();
            if(this.activeObject != null){
                let newX = event.changedTouches[0].clientX;
                let newY = event.changedTouches[0].clientY - this.verticalOffset;
                this.activeObject.updatePath(newX, newY);
            }

            this.lineArray.push({
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
                color: this.ctx.strokeStyle,
                draw: true // lineto
            });
        }, true);

        this.canvas.addEventListener("touchend", () => {
                if(this.activeObject != null){
                    this.activeObject.toggleColor();
                    this.activeObject = null
                }
        });
    }

    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.strokeStyle = managedCanvas.activeColor;
        this.ctx.lineWidth = 2;
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    addButton(posX, posY, radius, color) {
        this.buttons.push(new Button(posX, posY, radius, color));
    }

    drawManagedButtons() {
        this.buttons.forEach((button) => {
            if (button.recentlyPressed) {
                var now = new Date().getTime();
                var delta = now - this.latestTap;
                this.ctx.strokeStyle = "yellow";
                this.ctx.fillStyle = "yellow";
                if (delta > 300)
                    button.recentlyPressed = false;
            } else {
                this.ctx.strokeStyle = button.color;
                this.ctx.fillStyle = button.color;
            }
            this.ctx.beginPath();
            this.ctx.ellipse(button.posX, button.posY, button.radius, button.radius, 0, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.closePath();

            // return to active color used by user
            this.ctx.strokeStyle = this.activeColor;
        });
    }

    addCanvasObjects(...objects){
        this.managedObjects = this.managedObjects.concat(objects);
        let maxLayer = Math.max.apply(Math, objects.map(function(o) { return o.layer; }))
        if(maxLayer > this.maxLayers)
            this.maxLayers = maxLayer;
    }

    drawManagedObjects(){
        for(let i = this.maxLayers; i >= 0; i--){
            let layerObjects = this.managedObjects.filter(object => object.layer == i)            
            layerObjects.forEach(object => {
                this.ctx.strokeStyle = object.strokeColor;
                this.ctx.fillStyle = object.fillColor;
                if(object.translateActive)
                    this.drawTranslatedObject(object);
                else{
                    this.ctx.stroke(object.path);
                    this.ctx.fill(object.path);
                }                
            });
        }
    }

    drawTranslatedObject(object){
        // 1. store current state
        // 2. set origin of translation to the center
        // 3. rotate canvas around origin
        // 4. reset translation
        // 5. restore state
        this.ctx.save();        
        this.ctx.translate(object.translateCenter.posX, object.translateCenter.posY);
        this.ctx.rotate(object.rotationDegree);
        this.ctx.translate(-object.translateCenter.posX, -object.translateCenter.posY);
       
        this.ctx.stroke(object.path);
        this.ctx.fill(object.path);

        this.ctx.restore();
    }
}