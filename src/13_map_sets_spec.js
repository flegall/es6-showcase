import {chai, expect} from './imports';

describe('Set', () => {
    it('provide a set implementation', () => {
        let set = new Set();
        set.add("hello").add("goodbye").add("hello");

        expect(set.size).to.equal(2);
        expect(set.has("hello")).to.be.true;

        let values = [];
        for (let value of set.values()) {
            values.push(value);
        }

        expect(values).to.deep.equal(["hello", "goodbye"]);
    });
});

describe('Map', () => {
    it('provide a map implementation', () => {
        let map = new Map();
        map.set('42', 42);
        map.set('34', 34);

        expect(map.get('34')).to.equal(34);
        expect(map.size).to.equal(2);

        let keys = [];
        let values = [];
        for (let [key, value] of map.entries()) {
            keys.push(key);
            values.push(value);
        }

        expect(keys).to.deep.equal(['42', '34']);
        expect(values).to.deep.equal([42, 34]);
    });
});
