import {chai, expect} from './imports';
import {Shape, Circle} from './00_classes';

describe('Classes', () => {
    it('should have a constructor', () => {
        let shape = new Shape('1', 3, 4);

        expect(shape.id).to.equal('1');
        expect(shape.x).to.equal(3);
        expect(shape.y).to.equal(4);
    });

    it('should have a move method', () => {
        let shape = new Shape('1', 3, 4);
        shape.move(4, 5);

        expect(shape.x).to.equal(4);
        expect(shape.y).to.equal(5);
    });

    it('should have a toString() method', () => {
        let shape = new Shape('1', 3, 4);

        expect(shape.toString()).to.equal('Shape(1)');
    });
});

describe('Classes with inheritance', () => {
    it('should have a constructor', () => {
        let circle = new Circle('1', 3, 4, 5);
        expect(circle.x).to.equal(3);
        expect(circle.y).to.equal(4);
        expect(circle.radius).to.equal(5);
    });

    it('should have a toString() method', () => {
        let circle = new Circle('1', 3, 4, 5);

        expect(circle.toString()).to.equal('Rectangle > Shape(1)');
    });
});

describe('Static members', () => {
    it('should allow having a Circle.defaultCircle() static method', () => {
        let circle = Circle.defaultCircle();
        expect(circle.x).to.equal(10);
        expect(circle.y).to.equal(10);
    })
});

describe('Getters and setters', () => {
    it('getter should be present on Circle', () => {
        let circle = Circle.defaultCircle();
        expect(circle.abscisse).to.equal(10);
        circle.x = 20;
        expect(circle.abscisse).to.equal(20);
    });

    it('setter should be present on Circle', () => {
        let circle = Circle.defaultCircle();
        circle.abscisse = 20;
        expect(circle.abscisse).to.equal(20);
        expect(circle.x).to.equal(20);
    })
});


