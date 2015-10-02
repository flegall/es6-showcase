import {chai, expect} from './imports';

export function test() {
    console.log("test");
}

describe('test',() => {
   it('should work', () => {
       expect(1).to.equal(1)
   });
});


