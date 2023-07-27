const { assert } = require('chai');
const isPalindrome = require('../palindromeChecker.js'); 

// Test suite for the Palindrome Checker
describe('Palindrome Checker', () => {
  // Test case 1: Palindrome
  it('Should return true for a palindrome', () => {
    assert.isTrue(isPalindrome('radar'));
  });

  // Test case 2: Non-palindrome
  it('Should return false for a non-palindrome', () => {
    assert.isFalse(isPalindrome('Hello, World!'));
  });

  // Test case 3: Palindrome with spaces and punctuation
  it('Should handle spaces, punctuation, and capitalization', () => {
    assert.isTrue(isPalindrome('Able was I ere I saw Elba'));
  });

  // Add more test cases if needed
});