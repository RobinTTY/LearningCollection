class StarshipGame {
    constructor(managedCanvas) {
        this.managedCanvas = managedCanvas;
        this.starship = new Starship(managedCanvas.canvas);
        this.rotationReferenceLine = null;

        this.managedCanvas.addCanvasObjects(this.starship.ship);
    }

    checkTouchActions() {
        if (this.managedCanvas.activeTouchActions.length == 2) {
            let activeTouchActions = this.managedCanvas.activeTouchActions;
            this.rotationReferenceLine = this.convertTouchActionsToLine(activeTouchActions[0], activeTouchActions[1]);
            return true;
        }
        else
            return false;
    }

    updateStarshipRotation() {
        if (this.checkTouchActions() && this.managedCanvas.lastCycleTouchActions.length == 2) {
            let updatedLine = this.convertTouchActionsToLine(this.managedCanvas.lastCycleTouchActions[0], this.managedCanvas.lastCycleTouchActions[1]);
            let angle = MathHelper.angleBetweenLines(this.rotationReferenceLine, updatedLine);
            this.starship.ship.updateRotation(angle);
        }
    }

    convertTouchActionsToLine(touchAction1, touchAction2) {
        let point1 = new Point(touchAction1.clientX, touchAction1.clientY)
        let point2 = new Point(touchAction2.clientX, touchAction2.clientY)
        return new Line(point1, point2);
    }

    update(){
        this.updateStarshipRotation();
    }
}

class Starship {
    constructor(canvas) {
        this.ship = new Rectangle(new Point(canvas.offsetWidth / 2 - 50, canvas.offsetHeight / 2 - 50), 100, 100, 1, "black", "red", "red");
    }
}