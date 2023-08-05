
const { assert } = require('chai');

// Import the reverseWords function
const reverseWords = require('../wordReversal'); // Replace with the actual file path

// Test suite for reverseWords
describe('Word Reversal', () => {
  // Test case 1
  it('Should reverse words in a sentence', () => {
    const result = reverseWords("Hello World! How are you?");
    assert.equal(result, "olleH !dlroW woH era ?uoy");
  });

  // Test case 2
  it('Should reverse words in another sentence', () => {
    const result = reverseWords("Coding is fun!");
    assert.equal(result, "gnidoC si !nuf");
  });

  // Test case 3: Empty sentence
  it('Should return an empty string for an empty sentence', () => {
    const result = reverseWords("");
    assert.equal(result, "");
  });
});