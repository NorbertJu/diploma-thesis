export default class Turtle {
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.x = x ? x : canvas.width()/2;
    this.y = y ? y : canvas.height()/2;
    this.heading = 90;
    this.width = 1;
    this.pen = true;
    this.visible = true;
    this.color = {r:0, g:0, b:0, a:1}
  }

  fd(distance) {
    this.canvas.turtleContext.beginPath();
    let cosAngle = Math.cos((this.heading * Math.PI) / 180.0);
    let sinAngle = Math.sin((this.heading * Math.PI) / 180.0);
    let newX = this.x + cosAngle * distance;
    let newY = this.y - sinAngle * distance;
    this.canvas.line(this.x, this.y, newX, newY);
    this.x = newX;
    this.y = newY;
    this.canvas.turtleContext.stroke();
  }

  lt(angle) {
    angle = angle % 360;
    this.heading += angle;
    if (this.heading >= 360) {
      this.heading = this.heading % 360;
    }
  }

  rt(angle) {
    angle = angle % 360;
    this.heading -= angle;
    if (this.heading < 0) {
      this.heading = 360 + this.heading;
    }
  }

  penUp() {
    this.pen = false;
  }

  penDown() {
    this.pen = true;
  }

  goTo(x, y) {
    this.x = x;
    this.y = y;
  }

  penSize(width) {
    this.width = width;
    this.canvas.penSize(width);
  }

}