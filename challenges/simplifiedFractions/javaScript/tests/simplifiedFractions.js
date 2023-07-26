const chai = require('chai');
const simplifiedFractions = require('../simplifiedFractions.js');
const expect = chai.expect;

describe('simplifiedFractions', () => {
    it('should return the simplified fraction for a given fraction as a string', () => {
      // Test case 1: "24/36" simplifies to "2/3"
      expect(simplifiedFractions("24/36")).to.equal("2/3");
  
      // Test case 2: "5/10" simplifies to "1/2"
      expect(simplifiedFractions("5/10")).to.equal("1/2");
  
      // Test case 3: "7/14" simplifies to "1/2"
      expect(simplifiedFractions("7/14")).to.equal("1/2");
  
      // Test case 4: "20/30" simplifies to "2/3"
      expect(simplifiedFractions("20/30")).to.equal("2/3");
  
      // Test case 5: "9/15" simplifies to "3/5"
      expect(simplifiedFractions("9/15")).to.equal("3/5");
  
      // Test case 6: "8/12" simplifies to "2/3"
      expect(simplifiedFractions("8/12")).to.equal("2/3");
  
      // Test case 7: "2/7" is already in its simplest form
      expect(simplifiedFractions("2/7")).to.equal("2/7");
    });
  
    it('should handle the numerator being 0', () => {
      // Test case 8: "0/5" simplifies to "0/1"
      expect(simplifiedFractions("0/5")).to.equal("0/1");
  
      // Test case 9: "0/1" simplifies to "0/1"
      expect(simplifiedFractions("0/1")).to.equal("0/1");
    });
  
    it('should handle negative fractions', () => {
      // Test case 10: "-2/4" simplifies to "-1/2"
      expect(simplifiedFractions("-2/4")).to.equal("-1/2");
  
      // Test case 11: "-3/9" simplifies to "-1/3"
      expect(simplifiedFractions("-3/9")).to.equal("-1/3");
    });
  });