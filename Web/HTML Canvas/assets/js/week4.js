let canvas = document.getElementById("canvas");
let canvasContainer = document.getElementById('canvas-container');
let managedCanvas = new ManagedCanvas(canvas);

// create the objects to draw
let rectA = new Rectangle(new Point(20, 50), 100, 100, 0, "black", "orange", "red");
let rectB = new Rectangle(new Point(150, 180), 100, 100, 0, "black", "orange", "red");
let line = new Line(rectA.center, rectB.center, 1, "black", "white");

// create relations between objects
rectA.addLinkedObjects(line);
rectB.addLinkedObjects(line, rectA);
rectA.rotateInReferenceToLine(line);

// add objects to canvas and draw
managedCanvas.addCanvasObjects(rectA, rectB, line);

function animate() {
    managedCanvas.clearCanvas();
    managedCanvas.drawManagedObjects();
    window.requestAnimationFrame(animate);
}

managedCanvas.resize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
window.requestAnimationFrame(animate);
