
/*

Understanding the problem:

Objective: The objective of the challenge is to determine whether the digits of a given number form a straight arithmetic sequence or not.

Straight Arithmetic Sequence: A straight arithmetic sequence means that the difference between consecutive digits is the same for all pairs of digits in the number. It can be either increasing or decreasing. For example, in the number 123, the difference between 1 and 2 is 1, and the difference between 2 and 3 is also 1. So, it forms a straight arithmetic sequence.

Constraints:

If the given number is less than 100, return -1.
If the digits of the number are not forming an arithmetic sequence, return -1.
If the number has a single repeating digit, return 0.
If the digits of the number form a straight arithmetic sequence, return the absolute value of the step of the sequence.
Step of the Sequence: The step of the sequence refers to the difference between consecutive digits in the number. If the sequence is increasing, the step will be positive, and if the sequence is decreasing, the step will be negative. For example, in the number 753, the step is -2 because 5 - 7 = -2 and 3 - 5 = -2.

Input: The function takes an integer as input.

Output:

If the number is less than 100 or its digits are not forming an arithmetic sequence, return -1.
If the number has a single repeating digit, return 0.
If the digits of the number form a straight arithmetic sequence, return the absolute value of the step of the sequence.
Example:

For input 123, the output will be 1 because it forms a straight arithmetic sequence with a step of 1.
For input 753, the output will be 2 because it forms a straight arithmetic sequence with a step of -2.
For input 666, the output will be 0 because it has a single repeating digit.
For input 124, the output will be -1 because it does not form a straight arithmetic sequence.
For input 99, the output will be -1 because it is less than 100.
Notes:

The step of the sequence can be either positive or negative depending on whether it's increasing or decreasing.
The absolute value of the step is taken to handle the cases where the sequence is either increasing or decreasing.

-------------------------------

Create a plan:
1. handle numbers less then 100 return -1
2. handle consecutive numbers with and return 0
3. take the number and splice it into an array
4. take index 1 and minus it from index 0 and 2.
5. Check if they match. if they do return that number.
*/

function straightDigitalNumbers(num) {

    if (num < 100 || num > 999 ){
        return -1
    }

    const string = String(num)
    const array = string.split('')

    if (array[0] === array[1] || array[1] === array[2]){
        return 0
    }

    const firstCheck = Number(array[1]) - Number(array[0])
    console.log(typeof firstCheck)
    const secondCheck = Number(array[2]) - Number(array[1])
    console.log(secondCheck)

    if (firstCheck === secondCheck) {
        return Number(firstCheck)
    }else{
        return -1
    }

}

module.exports = straightDigitalNumbers;