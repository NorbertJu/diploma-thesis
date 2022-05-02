export default class Turtle {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = 1;
    this.reset(this.width);
    this.pen = true;
    this.visible = true;
  }

  set X(value) {
    this.x = value;
  }

  set Y(value) {
    this.y = value;
  }

  forwardPenUp(distance) {
    let cosAngle = Math.cos((this.heading * Math.PI) / 180.0);
    let sinAngle = Math.sin((this.heading * Math.PI) / 180.0);
    let newX = this.x + cosAngle * distance;
    let newY = this.y - sinAngle * distance;
    this.goTo(newX, newY);
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

  line(distance) {
    let cosAngle = Math.cos((this.heading * Math.PI) / 180.0);
    let sinAngle = Math.sin((this.heading * Math.PI) / 180.0);
    let newX = this.x + cosAngle * distance;
    let newY = this.y - sinAngle * distance;
    this.goTo(newX, newY);
    this.canvas.context.lineTo(newX, newY);
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
    this.canvas.penSize = width;
  }

  seth(heading) {
    this.heading = heading;
  }

  reset(penSize) {
    let x = this.canvas.width()/2;
    let y = this.canvas.height()/2;
    x%1 === 0 && penSize%2 === 1 ?  x -= 0.5 : undefined
    y%1 === 0 && penSize%2 === 1 ?  y -= 0.5 : undefined
    this.goTo(x, y);
    this.seth(90);
  }

  penColor(color) {
    this.color = color;
    this.canvas.penColor = color;
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  closeColor(rgb) {
    rgb.r += 20 - Math.floor(Math.random() * 41)
    rgb.g += 20 - Math.floor(Math.random() * 41)
    rgb.b += 20 - Math.floor(Math.random() * 41)
    rgb.r > 255 ? rgb.r = 255 : (rgb.r < 0 ? rgb.r = 0 : null);
    rgb.g > 255 ? rgb.g = 255 : (rgb.g < 0 ? rgb.g = 0 : null);
    rgb.b > 255 ? rgb.b = 255 : (rgb.b < 0 ? rgb.b = 0 : null);
    return 'rgb('+ rgb.r +', '+ rgb.g +', '+ rgb.b +')'
  }

  checkPosition(x, y) {
    if (x < 0 || y < 0 || x > this.canvas.width() || y > this.canvas.height()) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  computeSizeDecrease(penSizeDecrease, penSize, branchOrder) {
    if (penSize - penSizeDecrease * branchOrder > 1) {
      return penSize - penSizeDecrease * branchOrder
    }
    return 1
  }

  computeFaultyStep(length, faultyStep) {
    if (faultyStep.fault > 0) {
      if (Math.floor(Math.random() * 100) + 1 <= faultyStep.probability) {
        return (100 - (Math.floor(Math.random() * faultyStep.fault) + 1)) / 100 * length
      }
    }
    return length
  }

  computeFaultyTurn(angle, faultyTurn) {
    if (faultyTurn.fault > 0) {
      if (Math.floor(Math.random() * 100) + 1 <= faultyTurn.probability) {
        return parseInt(angle) + (Math.round(Math.random()) * 2 - 1) * (Math.floor(Math.random() * faultyTurn.fault) + 1)
      }
    }
    return angle
  }

  computeStrucutres(structures, length) {
    if (structures?.leaf?.checked) {
      if (Math.floor(Math.random() * 100) + 1 <= structures.leaf.probability) {
        let size;
        switch (structures.leaf.size) {
          case "0": size = length / 15; break;
          case "1": size = 1; break;
          case "2": size = 4; break;
          case "3": size = 8; break;
        } 
        this.leaf(size, structures.leaf.color)
      }
    }
    if (structures?.fruit?.checked) {
      if (Math.floor(Math.random() * 100) + 1 <= structures.fruit.probability) {
        let size;
        switch (structures.fruit.size) {
          case "0": size = length / 10 * (Math.floor(Math.random() * 7) / 10 + 0.7); break;
          case "1": size = 3; break;
          case "2": size = 6; break;
          case "3": size = 12; break;
        } 
        this.fruit(size, structures.fruit.color)
      }
    }
    if (structures?.flower?.checked) {
      if (Math.floor(Math.random() * 100) + 1 <= structures.flower.probability) {
        let size;
        switch (structures.flower.size) {
          case "0": size = length / 10 * (Math.floor(Math.random() * 7) / 10 + 0.7); break;
          case "1": size = 3; break;
          case "2": size = 6; break;
          case "3": size = 12; break;
        } 
        this.flower(size, structures.flower.color)
      }
    }
  }

  leaf(size, color) {
    let startH = this.heading
    let randomHeading = Math.floor(Math.random() * 360)
    this.seth(randomHeading)
    this.canvas.context.fillStyle = this.closeColor(this.hexToRgb(color));
    this.canvas.context.beginPath();
    for (let i = 0; i < 10; i++) {
      this.line(size)
      this.rt(9)
    }
    this.rt(90)
    for (let i = 0; i < 10; i++) {
      this.line(size)
      this.rt(9)
    }
    this.canvas.context.closePath();
    this.canvas.context.fill();
    this.seth(startH)
  }

  fruit(size, color) {
    this.canvas.context.fillStyle = this.closeColor(this.hexToRgb(color));
    this.canvas.context.beginPath();
    this.canvas.context.arc(this.x, this.y, size, 0, 2 * Math.PI, false);
    this.canvas.context.closePath();
    this.canvas.context.fill();
  }

  flower(size, color) {
    this.canvas.context.fillStyle = this.closeColor(this.hexToRgb(color));
    this.canvas.context.beginPath();
    this.canvas.context.arc(this.x, this.y, size, 0, 2 * Math.PI, false);
    this.canvas.context.closePath();
    this.canvas.context.fill();
    this.canvas.context.fillStyle = this.closeColor(this.hexToRgb(color));
    let startX = this.x
    let startY = this.y
    let startH = this.heading
    let randomHeading = Math.floor(Math.random() * 360)
    this.seth(randomHeading)
    for (let i = 0; i < 5; i++) {
      this.canvas.context.beginPath();
      this.rt(i * 72);
      this.forwardPenUp(size + (size / 10))
      let x = this.x
      let y = this.y
      this.rt(45)
      this.forwardPenUp(-(size / 2))
      this.line(size * 3)
      this.rt(135)
      this.line(size * 2)
      this.canvas.context.lineTo(x, y)
      this.canvas.context.closePath();
      this.canvas.context.fill();
      this.goTo(startX, startY)
      this.seth(randomHeading);
    }
    this.seth(startH);
  }

  draw(system, length, angle, penColor, penSize, penSizeDecrease, faults, structures) {
    if (length === true) {
      length = this.computeAutoLength(system, angle)
    }
    this.penColor(penColor)
    this.penSize(penSize)
    let stack = [];
    for (const command of system) {
      switch(command) {
        case "F": 
          this.fd(this.computeFaultyStep(length, faults.step)); 
          break;
        case "f": 
          this.forwardPenUp(this.computeFaultyStep(length, faults.step)); 
          break;
        case "+": 
          this.lt(this.computeFaultyTurn(angle, faults.turn)); 
          break;
        case "-": 
          this.rt(this.computeFaultyTurn(angle, faults.turn)); 
          break;
        case "[": 
          stack.push({x: this.x, y: this.y, h: this.heading}); 
          this.penSize(this.computeSizeDecrease(penSizeDecrease, penSize, stack.length))
          break;
        case "]": 
          this.computeStrucutres(structures, length)
          let pos = stack.pop();
          this.goTo(pos.x, pos.y);
          this.seth(pos.h);
          this.penSize(this.computeSizeDecrease(penSizeDecrease, penSize, stack.length))
          break;
      }
    }
  }

  computeAutoLength(system, angle) {
    let [width, height] = [this.canvas.parent.offsetWidth, this.canvas.parent.offsetHeight]
    let [x, y, h] = [this.x, this.y, this.heading]
    let start = {x, y}
    let [top, bottom, right, left] = [y, y, x, x]
    let stack = [];
    for (const command of system) {
      switch(command) {
        case "F": 
        case "f": 
          [x, y] = this.autoFd(x, y, h); 
          break;
        case "+": 
          h = this.autoLt(angle, h); 
          break;
        case "-": 
          h = this.autoRt(angle, h); 
          break;
        case "[": 
          stack.push([x, y, h]); 
          break;
        case "]": 
          [x, y, h] = stack.pop()
          break;
      }
      if (top > y) top = y;
      if (bottom < y) bottom = y;
      if (right < x) right = x;
      if (left > x) left = x;
    }
    const margin = 10
    let scalingOptions = {
      top: top > 0 ? (top - margin > 0 ? top - margin : top) / (start.y - top) : 0,
      bottom: bottom < height  ? (height - bottom - margin > 0 ? height - bottom - margin : height - bottom) / (bottom - start.y) : 0,
      right: right < width ? (width - right - margin > 0 ? width - right - margin : width - right) / (right - start.x) : 0,
      left: left > 0 ? (left - margin > 0 ? left - margin : left) / (start.x - left) : 0,
    }
    return Math.floor(Math.min(...Object.values(scalingOptions)) + 1)
  }

  autoFd(x, y, h) {
    let cosAngle = Math.cos((h * Math.PI) / 180.0);
    let sinAngle = Math.sin((h * Math.PI) / 180.0);
    let newX = x + cosAngle;
    let newY = y - sinAngle;
    return [newX, newY]
  }

  autoLt(angle, h) {
    angle = angle % 360;
    h += angle;
    if (h >= 360) {
      h = h % 360;
    }
    return h
  }

  autoRt(angle, h) {
    angle = angle % 360;
    h -= angle;
    if (h < 0) {
      h = 360 + h;
    }
    return h
  }

}