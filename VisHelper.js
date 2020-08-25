export class VisHelper {
  constructor(context) {
    this.context = context;
  }

  setStrokeWidth(lineWidth) {
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.lineWidth = lineWidth;
  }

  strokeCircle(x, y, r) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI);
    this.context.stroke();
  }

  fillCircle(x, y, r) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI);
    this.context.fill();
  }

  strokeRectangle(x, y, w, h) {
    this.context.beginPath();
    this.context.strokeRect(x, y, w, h);
    this.context.stroke();
  }

  fillRectangle(x, y, w, h) {
    this.context.beginPath();
    this.context.fillRect(x, y, w, h);
    this.context.fill();
  }

  putImage(imageURL, ...props) {
    const context = this.context;
    const img = new Image();
    img.src = imageURL;
    img.onload = function () {
      context.drawImage(img, ...props);
    };
  }

  drawText(text, centerX, centerY) {
    this.context.textAlign = "center";
    this.context.fillText(text, centerX, centerY);
  }
}
