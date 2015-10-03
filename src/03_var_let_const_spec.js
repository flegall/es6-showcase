import {chai, expect} from './imports';

describe('Var/Let/Const', () => {

    it('var should be scoped in a function', () => {
        var value = 0;

        {
            var value = 1;
            expect(value).to.equal(1);
        }

        expect(value).to.equal(1);
    });

    it('let should be scoped in a block', () => {
        let value = 0;

        {
            let value = 1;
            expect(value).to.equal(1);
        }

        expect(value).to.equal(0);
    });

    it('const should be immutable', () => {
        const PI = 3.1415927
        //PI = 2;
    });
});
