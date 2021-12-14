import { Shape } from "./shapeModule.js";

class Rectangle extends Shape {
  #Width = 1;
  #Height = 1;
  constructor(_color, _width, _height) {
    super(_color);
    this.#Width = _width;
    this.#Height = _height;
  }
  set Width(_width) {
    if (_width > 0) this.#Width = _width;
  }
  get Width() {
    return this.#Width;
  }
  set Height(_height) {
    if (_height > this.#Width) this.#Height = _height;
  }
  get Height() {
    return this.#Height;
  }
  getArea() {
    return `${super.drawShape()}, Height = ${this.#Height}, Width = ${
      this.#Width
    }`;
  }
}

class Square extends Rectangle {
  constructor(_color, _length) {
    super(_color, _length, _length);
  }
  getSquareArea() {
    return `${super.drawShape()}, Length = ${super.Height}`;
  }
}

export { Rectangle, Square };
// export * as squareMod from "./squareModule.js";
