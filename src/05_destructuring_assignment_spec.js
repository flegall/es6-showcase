import {chai, expect} from './imports';

describe.skip('Destructuring assignment', () => {

    it('arrays should be matched', () => {
        let list = [1, 2, 3];

        // ???

        expect(a).to.equal(1);
        expect(b).to.equal(2);
        expect(c).to.equal(3);
    });

    it('objects should be matched', () => {
        let object = {
            a: 1,
            b: 2,
            c: 3
        };

        // ???

        expect(a).to.equal(1);
        expect(b).to.equal(2);
        expect(c).to.equal(3);
    });

    it('matching should be applied in functions parameters', () => {
        function f([name, val]) {
            expect(name).to.equal('bar');
            expect(val).to.equal(42);
        }

        function g({name: n, val: v}) {
            expect(n).to.equal('bar');
            expect(v).to.equal(42);
        }

        function h({name, val}) {
            expect(name).to.equal('bar');
            expect(val).to.equal(42);
        }

        f(['bar', 42]);
        g({name: 'bar', val: 42});
        h({name: 'bar', val: 42});
    });
});
