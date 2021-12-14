// import { Shape } from "./shapeModule.js";
import * as squareMod from "./squareModule.js";
import { Circle } from "./circleModule.js";

// let shape = new Shape("red");
let rect = new squareMod.Rectangle("red", 5, 10);
let square = new squareMod.Square("red", 6);
let circ = new Circle("red", 6, [5, 5]);

console.log(rect);
console.log(rect.getArea());

console.log(square);
console.log(square.getSquareArea());

console.log(circ);
console.log(circ.getCirleArea());
console.log(`center coordinates are (${circ.Center})`);
