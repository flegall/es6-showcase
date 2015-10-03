import {chai, expect} from './imports';

describe('A generator', () => {
    it('is a special kind of functions that generate results when iterating', () => {
        function* fibonacci (numbers) {
            let pre = 0, cur = 1;
            while (numbers-- > 0) {
                [pre, cur] = [cur, pre + cur];
                yield cur;
            }
        }

        let terms = []
        for (let term of fibonacci(10)) {
            terms.push(term);
        }

        expect(terms).to.deep.equal([1, 2, 3, 5, 8 , 13, 21, 34, 55, 89]);
    });
});
