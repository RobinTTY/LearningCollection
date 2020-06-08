let canvas = document.getElementById("canvas");
let canvasContainer = document.getElementById('canvas-container');
let managedCanvas = new ManagedCanvas(canvas);
managedCanvas.resize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
managedCanvas.setBackground("assets/images/background.jpg");
let starshipGame = new StarshipGame(managedCanvas);

function animate() {
    managedCanvas.clearCanvas();
    managedCanvas.drawBackground();
    starshipGame.update();
    managedCanvas.drawManagedObjects();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
