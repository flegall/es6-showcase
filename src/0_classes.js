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
}

export class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}