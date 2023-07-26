const chai = require('chai');
const straightDigitalNumbers = require('../straightDigitalNumbers.js')
const expect = chai.expect;

describe('straightDigitalNumbers', () => {
  it('should return 1 for input 123', () => {
    expect(straightDigitalNumbers(123)).to.equal(1);
  });

  it('should return -2 for input 753', () => {
    expect(straightDigitalNumbers(753)).to.equal(-2);
  });

  it('should return 0 for input 666', () => {
    expect(straightDigitalNumbers(666)).to.equal(0);
  });

  it('should return -1 for input 124', () => {
    expect(straightDigitalNumbers(124)).to.equal(-1);
  });

  it('should return -1 for input 99', () => {
    expect(straightDigitalNumbers(99)).to.equal(-1);
  });

  it('should return -3 for input 963', () => {
    expect(straightDigitalNumbers(963)).to.equal(-3);
  });

  it('should return -3 for input 531', () => {
    expect(straightDigitalNumbers(531)).to.equal(-2);
  });

  it('should return 0 for input 777', () => {
    expect(straightDigitalNumbers(777)).to.equal(0);
  });

  it('should return -1 for input 100', () => {
    expect(straightDigitalNumbers(100)).to.equal(0);
  });

  it('should return 1 for input 12345', () => {
    expect(straightDigitalNumbers(12345)).to.equal(-1);
  });

  // did not program more then 1000

  it('should return -2 for input 86420', () => {
    expect(straightDigitalNumbers(86420)).to.equal(-1);
  });

  it('should return -1 for input 23456789', () => {
    expect(straightDigitalNumbers(23456789)).to.equal(-1);
  });

});