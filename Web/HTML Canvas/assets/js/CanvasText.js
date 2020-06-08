class CanvasText{
    constructor(content, startX, startY, size, color, font, layer, textAlign="start"){
        this.content = content;
        this.startX = startX;
        this.startY = startY;
        this.size = size;
        this.color = color;
        this.font = font;
        this.layer = layer;
        this.textAlign = textAlign;
    }

    printToCanvas(canvasContext){
        canvasContext.textAlign = this.textAlign;
        canvasContext.font = `${this.size}px ${this.font}`;
        canvasContext.fillStyle = this.color;
        canvasContext.fillText(this.content, this.startX, this.startY);
    }

    changeText(text){
        this.content = text;
    }
}