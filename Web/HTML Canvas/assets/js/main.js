let canvas1 = document.getElementById('canvas1');    // HTML element
let ctx1 = canvas1.getContext('2d');                 // context object

function animate() {
    draw1();
    draw2();
    draw3();

    chess();
    movingBall();
    clock();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

// Examples from lecture \\
function draw1() {
    // filled rectangle
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.fillStyle = "blue";
    ctx1.fillRect(100, 100, 50, 50);

    // stroke rectangle
    ctx1.strokeStyle = "green";
    ctx1.strokeRect(50, 50, 50, 50);

    ctx1.beginPath();
    ctx1.arc(150, 200, 30, 0, Math.PI * 2, false);
    ctx1.fill();
}

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');
let midX = canvas2.width / 2;
let midY = canvas2.height / 2;
let startTime = new Date().getTime();

function draw2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    let deltaTime = (new Date().getTime() - startTime) / 1000;
    let x = midX - 25 + (75 * Math.cos(deltaTime));
    let y = midY - 25 + (75 * Math.sin(deltaTime));
    ctx2.fillRect(x, y, 50, 50);
}

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');

function draw3() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    let deltaTime = (new Date().getTime() - startTime) / 1000;
    ctx3.translate(midX, midY);

    ctx3.rotate((deltaTime * 2 * Math.PI / 60) - Math.PI / 2);
    ctx3.translate(0, 0);
    ctx3.fillRect(0, 0, 50, 50);

    ctx3.resetTransform();
}
// Examples from lecture \\


// Chess Assignment
let canvas4 = document.getElementById('canvas4');
let ctx4 = canvas4.getContext('2d');
let color = ["white", "black"]

function chess() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);

    for (var i = 0; i < 8; i++)
        for (var j = 0; j < 8; j++) {
            ctx4.fillStyle = color[(j + i) % 2];
            ctx4.fillRect(j * canvas4.width / 8, i * canvas4.height / 8, canvas4.width / 8, canvas4.height / 8)
        }

    ctx4.strokeRect(0, 0, canvas4.width, canvas4.height);
}

// Ball Assignment

class Point{
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
}

class Velocity{
    constructor(dirX, dirY){
        this.dirX = dirX;
        this.dirY = dirY;
    }
}

function getRandomNumberInclusive(min, max) {
    return Math.random() * (min - max) + max;
 }

class Ball{
    constructor(radius){
        this.radius = radius;
        this.center = new Point(this.radius + new Date().getTime() % (canvas5.width - this.radius * 2), this.radius + new Date().getTime() * 1.36978 % (canvas5.height - this.radius * 2));
        this.velocity = new Velocity(getRandomNumberInclusive(-2, 2), getRandomNumberInclusive(-2, 2));        
    }

    move(){
        this.center.posX += this.velocity.dirX;
        this.center.posY += this.velocity.dirY;
    }

    moveWithinRectangle(length, height){
        if(this.center.posX + this.radius > length || this.center.posX - this.radius < 0)
            this.velocity.dirX = -this.velocity.dirX;
        if(this.center.posY + this.radius > height || this.center.posY - this.radius < 0)
            this.velocity.dirY = -this.velocity.dirY;
        this.move();
    }
}

let canvas5 = document.getElementById('canvas5');
let ctx5 = canvas5.getContext('2d');
let ball = new Ball(15);

function movingBall() {
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    ctx5.strokeRect(0, 0, canvas5.width, canvas5.height);
    ctx5.beginPath();
    ctx5.ellipse(ball.center.posX, ball.center.posY, ball.radius, ball.radius, 0, 0, 2 * Math.PI);
    ctx5.stroke();

    ball.moveWithinRectangle(canvas5.width, canvas5.height);
}

// Clock assignment

class Clock{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
    }

    drawBase(){
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        this.ctx.ellipse(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2 - 0.5, this.canvas.height / 2 - 0.5, 0, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawHoursOnBase(){
        for(let i = 1; i < 13; i++){
            let coordinates = this.getXyPositionOnCircle(i/12, 0.85);
            this.ctx.textBaseline = "middle";
            this.ctx.textAlign = "center";
            // + 2.5 is manual align for text to be centered correctly
            this.ctx.fillText(i, coordinates.posX, coordinates.posY + 2.5);
        }        
    }

    drawHand(anglePercentage, lengthPercentage, width){
        this.ctx.beginPath();
        this.ctx.lineWidth = width;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        
        let coordinates = this.getXyPositionOnCircle(anglePercentage, lengthPercentage);
        this.ctx.lineTo(coordinates.posX, coordinates.posY);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    getXyPositionOnCircle(anglePercentage, lengthPercentage){
        let radius = this.canvas.width / 2;
        let point = new Point();
        point.posX = radius - lengthPercentage * (Math.sin(-anglePercentage * 4 * (Math.PI / 2)) * radius);
        point.posY = radius - lengthPercentage * (Math.cos(-anglePercentage * 4 * (Math.PI / 2)) * radius);
        return point;
    }

    drawWeekday(weekday){
        this.ctx.font = this.canvas.width * 0.1 + "px Arial";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.fillText(weekdays[weekday], this.canvas.width * 0.75, this.canvas.height * 0.5);
    }

    drawComplete(seconds, minutes, hours, weekday){
        this.drawBase();
        this.drawHoursOnBase();
        this.drawHand(seconds / 60, 0.925, 3);
        this.drawHand(minutes / 60, 0.9, 8);
        this.drawHand((hours % 12) / 12, 0.6, 8);
        this.drawWeekday(weekday);
    }
}

let canvas6 = document.getElementById('canvas6');
let ctx6 = canvas6.getContext('2d');
let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function clock() {
    ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
    let date = new Date();
    let clock = new Clock(ctx6, canvas6);
    clock.drawComplete(date.getSeconds(), date.getMinutes(), date.getHours(), date.getDay());
}