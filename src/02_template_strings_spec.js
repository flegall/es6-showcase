import {chai, expect} from './imports';

describe('Template strings', () => {

    it('should format strings properly', () => {
        let a = 2;
        let b = 3;

        let string = `a + b = ${a + b}`;

        expect(string).to.equal("a + b = 5");
    });

    it('should allow multiple line results', () => {
        let string = `first line
        second line`;

        expect(string).to.equal("first line\n        second line");
    });

    it('should allow custom interpolation', () => {
        function sql(strings, ...values) {
            return {
                sql: strings.join('?'),
                params: values
            }
        }

        let firstName = 'John';
        let lastName = 'Doe';
        let statement = sql`insert into TABLE values(${firstName}, ${lastName})`;

        expect(statement.sql).to.equal('insert into TABLE values(?, ?)');
        expect(statement.params).to.have.length(2);
        expect(statement.params[0]).to.equal('John');
        expect(statement.params[1]).to.equal('Doe');
    });
});
