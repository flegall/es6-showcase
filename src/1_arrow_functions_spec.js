import {chai, expect} from './imports';
import {ArrowFunctions} from './1_arrow_functions';

describe('Arrow functions', () => {

    it('should allow expression bodies', () => {
        let arrowFunctions = new ArrowFunctions();
        let odds = [1, 3, 5, 7, 9];

        let evens = arrowFunctions.plusOneWithExpressionBody(odds);

        expect(evens).to.deep.equal([2, 4, 6, 8, 10]);
    });

    it('should allow statement bodies', () => {
        let arrowFunctions = new ArrowFunctions();
        let odds = [1, 3, 5, 7, 9];

        let evens = arrowFunctions.plusOneWithStatementBody(odds);

        expect(evens).to.deep.equal([2, 4, 6, 8, 10]);
    });

    it('should use lexical this bodies', () => {
        let arrowFunctions = new ArrowFunctions();
        let odds = [1, 3, 5, 7, 9];

        arrowFunctions.plusOneWithLexicalThis(odds);

        expect(arrowFunctions.results).to.deep.equal([2, 4, 6, 8, 10]);
    });
});
