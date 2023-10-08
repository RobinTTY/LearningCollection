class Rectangle extends CanvasObject{
    constructor(startPoint, width, height, layer, strokeColor, fillPrimary, fillSecondary){
        super(layer, strokeColor, fillPrimary, fillSecondary);
        this.startPoint = startPoint;
        this.width = width;
        this.height = height;        
        this.center = new Point(this.startPoint.posX + this.width / 2, this.startPoint.posY + this.height / 2);
        
        // translate options        
        this.translateCenter = new Point(this.center.posX, this.center.posY);
        this.rotationDegree = 0;

        // path
        this.path.rect(this.startPoint.posX, this.startPoint.posY, this.width, this.height);
    }

    updatePath(posX=this.startPoint.posX, posY=this.startPoint.posY, linkCall=false){
        if(!linkCall){
            super.updatePath();        
            this.startPoint.posX = posX - this.width / 2;
            this.startPoint.posY = posY - this.height / 2;
            this.center.posX = this.startPoint.posX + this.width / 2;
            this.center.posY = this.startPoint.posY + this.height / 2;
        }

        // handle rotation in reference to line
        if(this.rotationReference != null){
            let helperLine = new Line(this.startPoint, new Point(canvas.offsetWidth, this.startPoint.posY), 0, "black", "white");
            let angle = MathHelper.angleBetweenLines(helperLine, line);
            this.rotationDegree = angle;
        }

        this.updateRotation(this.rotationDegree, this.center);        
    }

    updateRotation(degree, center=this.center){
        this.translateActive = true;
        this.translateCenter.posX = center.posX;
        this.translateCenter.posY = center.posY;
        this.rotationDegree = degree;

        this.path.rect(this.startPoint.posX, this.startPoint.posY, this.width, this.height);
    }

    rotateInReferenceToLine(line){
        this.rotationReference = line;
        this.translateActive = true;
    }
}