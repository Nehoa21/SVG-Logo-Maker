const { Circle, Square, Triangle } = require("./shapes.js");

describe("Cicle", () => {
  it("Should set circle with color of blue.");
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="blue"/>'
  );
});

describe("Square", () => {
  it("Should set square with color of blue.");
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<rect x="50" y="20" width="150" height="150" fill="blue"/>'
  );
});
describe("Triangle", () => {
  it("Should set circle with color of blue.");
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="200,10 300,200 110,200" fill="blue"/>'
  );
});
