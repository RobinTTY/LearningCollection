class StarshipGame {
    constructor(managedCanvas) {
        this.managedCanvas = managedCanvas;
        this.starship = new Starship(managedCanvas);
        this.asteroids = [];
        this.asteroidsDestroyed = [];
        this.score = 0;
        this.scoreText = new CanvasText('Score: 0', this.managedCanvas.canvas.width / 2, this.managedCanvas.canvas.height * 0.15, Math.min(this.managedCanvas.canvas.width / 1500, 1) * 96, "cyan", "Times", 0, "center");
        
        this.managedCanvas.addCanvasObjects(this.starship.texture, this.scoreText);
        this.spawnAsteroids(40);
    }

    // magic asteroid spawn algorithm
    spawnAsteroids(numberAsteroids){
        let width = this.managedCanvas.canvas.width;
        let height = this.managedCanvas.canvas.height;
        let minDistanceToStarship = Math.min(width * 0.2, height * 0.2);
        let multiplier = Math.min(this.managedCanvas.canvas.width / 1000, 1);
        let half = Math.round(numberAsteroids / 2);

        for(let i = 0; i < half; i++){
            let asteroid = new Asteroid(new Point(Math.random() * (width / 2 - minDistanceToStarship), Math.random() * (height * 0.9)), -3 + 6 * Math.random(), multiplier);
            this.asteroids.push(asteroid);
            this.managedCanvas.addCanvasObjects(asteroid.texture);
        }

        for(let i = half; i > 0; i--){
            let asteroid = new Asteroid(new Point(Math.max((1 + Math.random()) * (width / 2), width / 2 + minDistanceToStarship), Math.random() * (height * 0.9)), -3 + 6 * Math.random(), multiplier);
            this.asteroids.push(asteroid);
            this.managedCanvas.addCanvasObjects(asteroid.texture);
        }
    }

    updateScore(){
        this.scoreText.changeText(`Score: ${this.score}`);
    }

    checkHit(){
        for(let projectile of this.starship.shotProjectiles){
            for(let asteroid of this.asteroids){
                if(this.managedCanvas.ctx.isPointInPath(asteroid.texture.path, projectile.hitBox.posX, projectile.hitBox.posY)){
                    // remove ray from canvas
                    let index = this.managedCanvas.managedObjects.findIndex(obj => obj == projectile.texture);
                    this.managedCanvas.managedObjects.splice(index, 1);

                    // remove ray from tracked rays
                    index = this.starship.shotProjectiles.indexOf(projectile);
                    this.starship.shotProjectiles.splice(index, 1);

                    // start asteroid destruction
                    index = this.asteroids.indexOf(asteroid);
                    this.asteroids.splice(index, 1);
                    this.asteroidsDestroyed.push(asteroid);
                    asteroid.destroy();

                    this.score += 100;
                    // only break one asteroid per ray
                    break;
                }
            }
        }
    }

    removeDestroyedAsteroids(){
        this.asteroidsDestroyed.filter(asteroid => asteroid.state == 5).forEach(asteroid =>  {
            let index = this.managedCanvas.managedObjects.findIndex(object => object == asteroid.texture);
            this.managedCanvas.managedObjects.splice(index, 1);
            this.asteroidsDestroyed.splice(this.asteroidsDestroyed.findIndex(ast => ast == asteroid), 1);
        })
    }

    update() {
        this.starship.update();
        this.checkHit();
        this.removeDestroyedAsteroids();
        this.updateScore();
    }
}

class Starship {
    constructor(managedCanvas) {
        this.multiplier = Math.min(managedCanvas.canvas.width / 1000, 1);
        this.managedCanvas = managedCanvas;        
        this.texture = new Texture(new Point(managedCanvas.canvas.offsetWidth / 2 - this.multiplier * 100, managedCanvas.canvas.offsetHeight / 2 - this.multiplier * 100), 200 * this.multiplier, 200 * this.multiplier, 1, "/~romuit02/assets/images/spaceship.png");
        this.currentAngle = 0;
        this.shotProjectiles = [];

        setInterval(this.shoot.bind(this), 2000);
    }

    updateRotation() {
        if (this.checkTouchActions()) {
            let rotationReferenceLine = this.convertTouchActionsToLine(this.managedCanvas.lastCycleTouchActions[1][0], this.managedCanvas.lastCycleTouchActions[1][1]);
            let updatedLine = this.convertTouchActionsToLine(this.managedCanvas.lastCycleTouchActions[0][0], this.managedCanvas.lastCycleTouchActions[0][1]);
            let angle = MathHelper.angleBetweenLines(rotationReferenceLine, updatedLine);
            this.texture.updateRotation(this.currentAngle);
            this.currentAngle -= angle;
        }
    }

    checkTouchActions() {
        if (this.managedCanvas.lastCycleTouchActions.length == 2 && this.managedCanvas.activeTouches == 2) {
            return true;
        }
        else
            return false;
    }

    convertTouchActionsToLine(touchAction1, touchAction2) {
        let point1 = new Point(touchAction1.clientX, touchAction1.clientY)
        let point2 = new Point(touchAction2.clientX, touchAction2.clientY)
        return new Line(point1, point2);
    }

    shoot() {
        let projectile = new Projectile(this.texture.center, this.currentAngle, Math.min(Math.min(this.managedCanvas.canvas.width, this.managedCanvas.canvas.height), 700) * 0.005, this.multiplier);
        this.shotProjectiles.push(projectile);
        this.managedCanvas.addCanvasObjects(projectile.texture);
    }

    update(){
        this.updateRotation();
        for(let projectile of this.shotProjectiles){
            projectile.updatePosition();
        }
    }
}

class Projectile {
    constructor(startPoint, angle, speed, sizeMultiplier) {
        this.width = sizeMultiplier * 16;
        this.height = sizeMultiplier * 152;
        this.heightOffset = sizeMultiplier * -90;
        this.speed = speed;
        this.angle = angle;
        this.texture = new Texture(new Point(startPoint.posX - this.width / 2, startPoint.posY + this.heightOffset), this.width, this.height, 2, "/~romuit02/assets/images/long-ray.png");
        this.hitBox = new Point(startPoint.posX - this.width / 2, startPoint.posY + this.heightOffset);
        this.texture.draggable = false;
        this.texture.updateRotation(angle);
    }

    updatePosition(){
        this.texture.startPoint.posY -= this.speed;
        this.hitBox.posX += this.speed * Math.sin(this.angle);
        this.hitBox.posY += this.speed * -Math.cos(this.angle);
    }
}

class Asteroid{
    constructor(startPoint, angle, sizeMultiplier){
        this.width = sizeMultiplier * 128;
        this.height = sizeMultiplier * 128;
        this.texture = new Texture(new Point(startPoint.posX - this.width / 2, startPoint.posY - this.height / 2), this.width, this.height, 1, "/~romuit02/assets/images/asteroid.png");
        this.texture.draggable = false;
        this.destroySprites = [ "asteroid_destroyed1", "asteroid_destroyed2", "asteroid_destroyed3", "asteroid_destroyed4", "asteroid_destroyed5" ];
        this.state = 0;
        this.intervalHandler = null;
        this.texture.updateRotation(angle);
    }

    destroy(){
        if(this.state == 0){
            this.intervalHandler = setInterval(this.destroy.bind(this), 200);
        }
        if(this.state < 5){
            this.texture.image.src = "/~romuit02/assets/images/" + this.destroySprites[this.state];
        }
        if(this.state == 5){
            clearInterval(this.intervalHandler);
            return;
        }
        this.state++;
    }
}