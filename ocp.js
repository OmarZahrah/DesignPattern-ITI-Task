class Shape {
  draw() {
    throw new Error("draw() must be implemented");
  }
}

class Circle extends Shape {
  draw() {
    return "Drawing a circle";
  }
}

class Square extends Shape {
  draw() {
    return "Drawing a square";
  }
}

class ShapeDrawer {
  draw(shape) {
    return shape.draw();
  }
}

const drawer = new ShapeDrawer();
const circle = new Circle();
const square = new Square();
console.log(drawer.draw(circle));
console.log(drawer.draw(square));
