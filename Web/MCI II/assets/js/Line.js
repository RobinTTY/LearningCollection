class Line extends CanvasObject{
    constructor(point1, point2, layer, strokeColor, fillPrimary, fillSecondary){
        super(layer, strokeColor, fillPrimary, fillSecondary);
        this.point1 = point1;
        this.point2 = point2;
        
        this.path.moveTo(this.point1.posX, this.point1.posY);
        this.path.lineTo(this.point2.posX, this.point2.posY);
    }

    updatePath(posX, posY){
        super.updatePath();
        this.path.moveTo(this.point1.posX, this.point1.posY);
        this.path.lineTo(this.point2.posX, this.point2.posY);
    }
}