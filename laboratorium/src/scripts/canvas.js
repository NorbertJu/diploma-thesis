export default class Canvas {
  constructor(turtleCanvas, scale, parent) {
    this.parent = parent;
    this.turtleCanvas = turtleCanvas;
    this.turtleContext = turtleCanvas.getContext("2d");
    this.turtleCanvas.width = turtleCanvas.offsetWidth * scale;
    this.turtleCanvas.height = turtleCanvas.offsetHeight * scale;
    this.turtleContext.scale(scale,scale);
  }

  line(fromX, fromY, toX, toY) {
    this.turtleContext.moveTo(fromX, fromY);
    this.turtleContext.lineTo(toX, toY);
  }

  color(colorName) {
    this.turtleContext.fillStyle = colorName;
    this.turtleContext.fillRect(0, 0, this.width(), this.height());
  }

  width() {
    return this.parent.offsetWidth-2;
  }

  height() {
    return this.parent.offsetHeight-2;
  }

  set penSize(width) {
    this.turtleContext.lineWidth = width;
  }

  get penSize() {
    return this.turtleContext.lineWidth;
  }

}