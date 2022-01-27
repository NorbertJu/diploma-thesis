export default class Canvas {
  constructor(canvas, scale, parent) {
    this.parent = parent;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.canvas.width = canvas.offsetWidth * scale;
    this.canvas.height = canvas.offsetHeight * scale;
    this.color("#ffffff");
    this.context.scale(scale,scale);
  }

  line(fromX, fromY, toX, toY) {
    this.context.moveTo(fromX, fromY);
    this.context.lineTo(toX, toY);
  }

  color(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
  }

  width() {
    return this.parent.offsetWidth-2;
  }

  height() {
    return this.parent.offsetHeight-2;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
  }

  set penSize(width) {
    this.context.lineWidth = width;
  }

  get penSize() {
    return this.context.lineWidth;
  }

  set penColor(color) {
    this.context.strokeStyle = color;
  }

  get penColor() {
    return this.context.strokeStyle;
  }

}