window.onload = function () {
    let canvas = document.getElementById('canvas', { alpha: false });
    let ctx = canvas.getContext('2d');
    let navbar = this.document.getElementById('nav');
    let heading = this.document.getElementById('heading');
    let verticalOffset = navbar.offsetHeight + heading.offsetHeight;
    let managedCanvas = new ManagedCanvas(canvas, verticalOffset);

    // handle responsive page
    window.addEventListener("resize", handleResize);
    let canvasContainer = document.getElementById('canvas-container');
    function handleResize() {
        canvas.height = canvasContainer.offsetHeight;
        canvas.width = canvasContainer.offsetWidth;
        ctx.strokeStyle = managedCanvas.activeColor;
        ctx.lineWidth = 2;
    }

    function draw() {
        if (managedCanvas.linearray.length > 0) {
            ctx.beginPath();

            for (let line of managedCanvas.linearray) {
                ctx.strokeStyle = line.color;        

                if (line.draw) {
                    ctx.lineTo(line.x, line.y - verticalOffset);
                } else {
                    ctx.moveTo(line.x, line.y - verticalOffset);
                }
                ctx.stroke();
            }
            // keep array small to prevent lag
            managedCanvas.linearray.splice(0, managedCanvas.linearray.length - 1);
        }
        managedCanvas.drawManagedButtons();
        requestAnimationFrame(draw);
    }
    
    handleResize();
    managedCanvas.addButton(50, 40, 30, 'red');
    managedCanvas.addButton(130, 40, 30, 'blue');
    draw();
};

class ManagedCanvas {
    constructor(canvas, verticalOffset) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d", { alpha: false });
        this.buttons = [];
        this.verticalOffset = verticalOffset;
        this.activeColor = "red";
        this.linearray = [];
        this.latestTap = new Date();

        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.canvas.addEventListener("click", (event) => {
            var now = new Date().getTime();
            var delta = now - this.latestTap;

            if (delta < 300) {
                this.linearray = [];
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
            this.linearray.push({
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
                color: this.ctx.strokeStyle,
                draw: false // moveto
            });
        }, true);

        this.canvas.addEventListener("touchmove", (event) => {
            this.linearray.push({
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
                color: this.ctx.strokeStyle,
                draw: true // lineto
            });
        }, true);
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
}

class Button {
    constructor(posX, posY, radius, color) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.color = color;
        this.recentlyPressed = false;
    }
}