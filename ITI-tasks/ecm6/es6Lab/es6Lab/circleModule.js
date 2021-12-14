import { Shape } from "./shapeModule.js";

class Circle extends Shape {
  #Radius = 1;
  #Center = [1, 1];

  constructor(_color, _radius, _center) {
    super(_color);
    this.#Radius = _radius;
    this.#Center = _center;
  }
  set Radius(_radius) {
    if (_radius > 0) this.#Radius = _radius;
  }
  get Radius() {
    return this.#Radius;
  }
  set Center(_center) {
    this.#Center = _center;
  }
  get Center() {
    return this.#Center;
  }
  getCirleArea() {
    return `color: ${super.drawShape()}, radius: ${this.#Radius}, center: (${
      this.Center
    })`;
  }
}

export { Circle };
