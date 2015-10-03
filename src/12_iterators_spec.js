import {chai, expect} from './imports';

describe.skip('An iterator', () => {
    it('is a special kind of symbol that generate results when iterating', () => {
        let fibonacci = {
            [Symbol.iterator]() {
                let pre = 0, cur = 1;
                return {
                    next () {
                        [pre, cur] = [cur, pre + cur];
                        return {done: false, value: cur};
                    }
                };
            }
        };

        let terms = []
        for (let term of fibonacci) {
            if (term > 100) break;
            terms.push(term);
        }

        expect(terms).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });
});
