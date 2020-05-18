window.onload = function () {
    let canvas = document.getElementById('canvas', { alpha: false });
    let ctx = canvas.getContext('2d');
    let navbar = this.document.getElementById('nav');
    let heading = this.document.getElementById('heading');
    let verticalOffset = navbar.offsetHeight + heading.offsetHeight;
    let managedCanvas = new ManagedCanvas(canvas);

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
        if (managedCanvas.lineArray.length > 0) {
            ctx.beginPath();

            for (let line of managedCanvas.lineArray) {
                ctx.strokeStyle = line.color;        

                if (line.draw) {
                    ctx.lineTo(line.x, line.y - verticalOffset);
                } else {
                    ctx.moveTo(line.x, line.y - verticalOffset);
                }
                ctx.stroke();
            }
            // keep array small to prevent lag
            managedCanvas.lineArray.splice(0, managedCanvas.lineArray.length - 1);
        }
        managedCanvas.drawManagedButtons();
        requestAnimationFrame(draw);
    }
    
    handleResize();
    managedCanvas.addButton(50, 40, 30, 'red');
    managedCanvas.addButton(130, 40, 30, 'blue');
    draw();
};
