export default class Canvas {
  constructor(turtleCanvas, scale) {
    this.turtleCanvas = turtleCanvas;
    this.turtleContext = this.turtleCanvas.getContext("2d");
    this.turtleCanvas.width = this.width() * scale;
    this.turtleCanvas.height = this.height() * scale;
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
    return this.turtleCanvas.offsetWidth;
  }

  height() {
    return this.turtleCanvas.offsetHeight;
  }

  penSize(width) {
    this.turtleContext.lineWidth = width;
  }

}