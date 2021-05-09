export default class Turtle {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = 1;
    this.reset();
    this.pen = true;
    this.visible = true;
    this.color = {r:0, g:0, b:0, a:1}
  }

  set X(value) {
    this.x = this.alignCoordinate(value);
  }

  set Y(value) {
    this.y = this.alignCoordinate(value);
  }

  alignCoordinate(value) {
    // 0.5 to allign with HTML canvas if pen width is odd
    if (value%1 == 0 && this.width%2 == 1) {
      value -= 0.5;
    } else if (value%1 == 0.5 && this.width%2 == 0) {
      value += 0.5;
    }
    return value;
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
    this.X = x;
    this.Y = y;
  }

  penSize(width) {
    this.width = width;
    this.canvas.penSize(width);
  }

  seth(heading) {
    this.heading = heading;
  }

  reset() {
    this.goTo(this.canvas.width()/2, this.canvas.height()/2);
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
        case "+": this.lt(angle); break;
        case "-": this.rt(angle); break;
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