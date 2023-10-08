class Texture extends Rectangle{
    constructor(startPoint, width, height, layer, imagePath){
        super(startPoint, width, height, layer, "black", "cyan", "red");
        this.image = new Image();
        this.image.src = imagePath;
    }
}
