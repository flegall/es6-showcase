export class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    get abscisse() {
        return this.x;
    }

    set abscisse(x) {
        this.x = x;
    }

    toString() {
        return `Shape(${this.id})`;
    }
}

export class Circle extends Shape {
    static defaultCircle() {
        return new Circle('default', 10, 10, 5);
    }

    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }

    toString() {
        return "Rectangle > " + super.toString();
    }
}
