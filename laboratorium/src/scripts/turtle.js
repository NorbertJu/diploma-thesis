export default class Turtle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
    this.width = 1;
    this.pen = true;
    this.visible = true;
    this.color = {r:0, g:0, b:0, a:1}
  }

  fd(distance) {
    this.canvas.context.beginPath();
    let cosAngle = Math.cos((this.heading * Math.PI) / 180.0);
    let sinAngle = Math.sin((this.heading * Math.PI) / 180.0);
    let newX = this.x + cosAngle * distance;
    let newY = this.y - sinAngle * distance;
    this.canvas.line(this.x, this.y, newX, newY);
    this.goTo(newX, newY);
    this.canvas.context.stroke();
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
    this.checkPosition(x, y);
    this.x = x;
    this.y = y;
  }

  penSize(width) {
    this.width = width;
    this.canvas.penSize(width);
  }

  seth(heading) {
    this.heading = heading;
  }

  reset() {
    // +0.5 to allign with HTML canvas
    this.x = Math.round(this.canvas.width()/2) + 0.5;
    this.y = Math.round(this.canvas.height()/2) + 0.5;
    this.seth(90);
  }

  checkPosition(x, y) {
    if (x < 0 || y < 0 || x > this.canvas.width() || y > this.canvas.height()) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  draw(system, line, angle) {
    let stack = [];
    for (let command of system) {
      switch(command) {
        case "F": this.fd(line); break;
        case "+": this.rt(angle); break;
        case "-": this.lt(angle); break;
        case "[": stack.push({x: this.x, y: this.y, h: this.heading}); break;
        case "]": {
          let pos = stack.pop();
          this.goTo(pos.x, pos.y);
          this.seth(pos.h);
          break;
        }
      }
    }
  }

}