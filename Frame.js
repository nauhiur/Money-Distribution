import { VisHelper } from "./VisHelper.js";

export class Frame {
  constructor(width, height) {
    this.canvas = document.getElementById("cvs");
    this.context = this.canvas.getContext("2d");
    this.visHelper = new VisHelper(this.context);

    this.canvas.width = width;
    this.canvas.height = height;
  }

  render(data) {
    this.data = data;
    this.repaint();
  }

  repaint() {
    // requestAnimationFrame(repaint);
    this.context.clearRect(
      this.canvas.offsetLeft,
      this.canvas.offsetTop,
      this.canvas.width,
      this.canvas.height
    );

    // TODO: Specific Drawing Process w/ this.data
    let w = this.canvas.width / this.data.length;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > 0) {
        this.context.fillStyle = "green";
        this.visHelper.fillRectangle(
          i * w + 1,
          this.canvas.height / 2 - this.data[i],
          w - 1,
          this.data[i]
        );
      } else {
        this.context.fillStyle = "red";
        this.visHelper.fillRectangle(
          i * w + 1,
          this.canvas.height / 2,
          w - 1,
          -this.data[i]
        );
      }
    }
  }
}
