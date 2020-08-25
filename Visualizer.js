import { Frame } from "./Frame.js";

document.title = "Simulation";

export class Visualizer {
  constructor(width, height) {
    this.frame = new Frame(width, height);

    // TODO: Initialize Data
    this.data = new Array(150);
    this.data.fill(100);

    // TODO: add Event Listeners
    this.addKeyListener();
    this.addMouseListener();

    this.run();
  }

  run() {
    // TODO: Animation Logic
    setInterval(() => {
      this.data.sort((a, b) => a - b);
      this.frame.render(this.data);
      for (let k = 0; k < 10; k++) {
        for (let i = 0; i < this.data.length; i++) {
          let j = parseInt(Math.random() * this.data.length);
          this.data[i]--;
          this.data[j]++;
        }
      }
    }, 10);
  }

  addKeyListener() {
    // TODO
  }

  addMouseListener() {
    // TODO
  }
}
