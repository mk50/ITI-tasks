class Shape {
  #Color = "white";
  constructor(_color) {
    if (new.target.name == "Shape") {
      throw new Error(
        "Abstract Class , You Can't Create And Object From It !!!!"
      );
    }
    this.color = _color;
  }
  set color(_color) {
    if (_color.trim().length > 0) this.#Color = _color;
  }
  get color() {
    return this.#Color;
  }
  drawShape() {
    return `color = ${this.#Color}`;
  }
}

export { Shape };
