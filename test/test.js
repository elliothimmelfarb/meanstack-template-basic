'use stict';

const chai = require('chai');
const expect = chai.expect;

const util = require('../util');

describe('util', () => {
  describe('#add()', () => {
    it('should return the sum of two arguments', () => {
      expect(util.add(1, 2)).to.equal(3);
      expect(util.add(120, 30)).to.equal(150);
      expect(util.add(10, -20)).to.equal(-10);
    });
    it('should return NaN if one of the arguments is missing', () => {
      expect(util.add(3)).to.be.NaN;
    });
  });

  describe('#wordCount()', () => {
    it('should return the count of only the words in the string', () => {
      expect(util.wordCount('this has four words')).to.equal(4);
      expect(util.wordCount('this has 4 words')).to.equal(4);
    })
    it('should throw error with non-string input', () => {
      expect(() => util.wordCount(9)).to.throw(Error);
    })
  })
});
