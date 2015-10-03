import {chai, expect} from './imports';

describe('Enhanced object properties', () => {

    it('should provide a shorter syntax for creating objects', () => {
        let x = 1;
        let y = 2;
        let obj = { x, y };

        expect(obj).to.deep.equal({x: 1, y: 2});
    });

    it('should provide a shorter syntax for defining methods on objects', () => {
        let obj = {
            toString () {
                return 'foo';
            }
        };

        expect(obj.toString()).to.equal('foo');
    });
});
