// Import the assert module from Chai
const { assert } = require('chai');

// Import the FizzBuzz function
const fizzBuzz = require('../fizzBuzz'); 

/// Mock console.log to capture the output
let output = [];
console.log = (value) => {
  output.push(value);
};

// Test suite for FizzBuzz
describe('FizzBuzz', () => {
    // Test case 1: Fizz
    it('Should print "Fizz" for multiples of 3', () => {
      output = [];
      fizzBuzz(10);
      const expectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
      assert.deepEqual(output, expectedOutput);
    });
  
    // Test case 2: Buzz
    it('Should print "Buzz" for multiples of 5', () => {
      output = [];
      fizzBuzz(10);
      const expectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
      assert.deepEqual(output, expectedOutput);
    });
  
    // Test case 3: FizzBuzz
    it('Should print "FizzBuzz" for multiples of both 3 and 5', () => {
      output = [];
      fizzBuzz(15);
      const expectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];
      assert.deepEqual(output, expectedOutput);
    });
  
  });