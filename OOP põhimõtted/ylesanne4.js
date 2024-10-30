class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    getArea() {
      throw new Error("getArea() must be implemented in derived classes");
    }
  }
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    print() {
      return `Circle (r: ${this.radius}, color: ${this.color})`;
    }
  }
  class Square extends Shape {
    constructor(color, side) {
      super(color);
      this.side = side;
    }
  
    getArea() {
      return this.side * this.side;
    }
  
    print() {
      return `Square (a: ${this.side}, color: ${this.color})`;
    }
  }
  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
  
    getArea() {
      return this.length * this.width;
    }
  
    print() {
      return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color})`;
    }
  }

  class Paint {
    constructor() {
      this.shapes = [];
    }
  
    addShape(shape) {
      this.shapes.push(shape);
    }
  
    getShapes() {
      return this.shapes;
    }
  
    calculateTotalArea() {
      return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
    }
  
    getCircles() {
      return this.shapes.filter(shape => shape instanceof Circle);
    }
  
    getSquares() {
      return this.shapes.filter(shape => shape instanceof Square);
    }
  
    getRectangles() {
      return this.shapes.filter(shape => shape instanceof Rectangle);
    }
  }
  
  // Testimine
  const paint = new Paint();
  paint.addShape(new Circle("red", 5));
  paint.addShape(new Square("blue", 3));
  paint.addShape(new Rectangle("green", 4, 6));
  
  console.log(paint.calculateTotalArea());
  console.log(paint.getCircles());
  
  