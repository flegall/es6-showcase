import {chai, expect} from './imports';

describe('Parameters handling', () => {

    it('default parameters should be applied', () => {
        function addWithDefaults(x, y = 2, z = 3) {
            return x + y + z;
        }

        expect(addWithDefaults(1)).to.equal(6);
        expect(addWithDefaults(1, 3)).to.equal(7);
        expect(addWithDefaults(1, 3, 4)).to.equal(8);
    });

    it('rest parameters should be applied', () => {
        expect(add(1, 2)).to.equal(3);
        expect(add(1, 2, 3)).to.equal(6);
    });

    it('spread operator should be applied', () => {
        let array = [3, 4, 5];

        expect(add(1, 2, ...array)).to.equal(15);
    });
});

function add(a, b, ...rest) {
    return a + b + sum(rest);
}

function sum(array) {
    return array.reduce((x, y) => x + y, 0);
}
