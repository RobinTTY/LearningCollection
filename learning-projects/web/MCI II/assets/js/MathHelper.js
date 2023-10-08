class MathHelper{
    static createVectorFromLine(line){
        let x = line.point2.posX - line.point1.posX;
        let y = line.point2.posY - line.point1.posY;
        return { x:x, y:y };
    }

    static angleBetweenLines(line1, line2){
        let vec1 = this.createVectorFromLine(line1);
        let vec2 = this.createVectorFromLine(line2);
        return Math.atan2(vec1.x * vec2.y - vec1.y * vec2.x, vec1.x * vec2.x + vec1.y * vec2.y);
    }
}