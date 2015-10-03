import {chai, expect} from './imports';

describe.skip('For-of', () => {
    it('should iterate on values', () => {
        let array = [3, 5, 7];
        let values = [];

        for (let value of array) {
            values.push(value);
        }

        expect(values).to.deep.equal([3, 5, 7]);
    });

    it('unlike for-in which iterate on properties', () => {
        let array = [3, 5, 7];
        let properties = [];

        for (let property in array) {
            properties.push(property);
        }

        expect(properties).to.deep.equal(['0', '1', '2']);
    });
});
