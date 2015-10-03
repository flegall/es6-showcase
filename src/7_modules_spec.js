import {chai, expect} from './imports';

import {SEVEN, getSeven} from './7_modules';
import * as sevenModule from './7_modules'
import defModule from './7_modules'

describe('Modules', () => {
    it('should allow importing symbols', () => {
        expect(SEVEN).to.equal(7);
        expect(getSeven()).to.equal(7);
    });

    it('should allow importing whole modules', () => {
        expect(sevenModule.SEVEN).to.equal(7);
        expect(sevenModule.getSeven()).to.equal(7);
    });

    it('should allow importing default symbol', () => {
        expect(defModule.SEVEN).to.equal(7);
        expect(defModule.getSeven()).to.equal(7);
    });

    it('default symbol should be requirable', () => {
        let defSymbol = require('./7_modules');
        expect(defSymbol.SEVEN).to.equal(7);
        expect(defSymbol.getSeven()).to.equal(7);
    });
});
