import {chai, expect} from './imports';

describe.skip('Enhanced object properties', () => {

    it('should provide a shorter syntax for creating objects', () => {
        let x = 1;
        let y = 2;

        // let obj = ???

        expect(obj).to.deep.equal({x: 1, y: 2});
    });

    it('should provide a shorter syntax for defining methods on objects', () => {
        let obj = {
            toString: function() {
                return 'foo';
            }
        };

        expect(obj.toString()).to.equal('foo');
    });
});
