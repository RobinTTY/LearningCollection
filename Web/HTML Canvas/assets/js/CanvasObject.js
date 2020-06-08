class CanvasObject{
    constructor(layer, strokeColor, fillPrimary, fillSecondary){
        this.path = new Path2D();
        this.layer = layer;        
        this.strokeColor = strokeColor;
        this.fillColor = fillPrimary;
        this.fillPrimary = fillPrimary;
        this.fillSecondary = fillSecondary;
        this.linkedObjects = [];
        
        this.translateActive = false;
        this.rotationReference = null;
        this.draggable = true;
    }

    addRotation(){
        throw new Error("Object does not support rotation.");
    }

    rotateInReferenceToLine(line){
        throw new Error("Object does not support rotation.");
    }

    toggleColor(){
        if(this.fillColor == this.fillPrimary)
            this.fillColor = this.fillSecondary;
        else
            this.fillColor = this.fillPrimary;
    }

    // linked objects get updated when this object gets updated
    addLinkedObjects(...objects){
        this.linkedObjects = this.linkedObjects.concat(objects);
    }

    updatePath(posX, posY, linkCall=false){
        // prevent recursive calls from dependencies
        if(linkCall) return;
        this.path = new Path2D();
        this.linkedObjects.forEach(object => {
            object.updatePath(0, 0, true);
        });
    }
}