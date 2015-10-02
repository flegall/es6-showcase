import {chai, expect} from './imports';
import {Shape, Circle} from './0_classes';

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
});

describe('Classes with inheritance', () => {
    it('should have a constructor', () => {
        let circle = new Circle('1', 3, 4, 5);
        expect(circle.x).to.equal(3);
        expect(circle.y).to.equal(4);
        expect(circle.radius).to.equal(5);
    });
});


