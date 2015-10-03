export class ArrowFunctions {
    constructor() {
        this.results = [];
    }

    plusOneWithExpressionBody(odds) {
        return odds.map(v => v + 1);
    }

    plusOneWithStatementBody(odds) {
        return odds.map(v => {
            return v + 1;
        });
    }

    plusOneWithLexicalThis(odds) {
        return odds.forEach(v => {
            this.results.push(v + 1);
        });
    }
}
