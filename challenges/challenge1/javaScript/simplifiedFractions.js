
// input string
// output simplified fraction as string
/*
------------Plan----------------
1. take the stirng and slice the two numbers from it. Seperating them
2. find all the numbers that divide into the numbers with no remainders ie. using a mod.
3. put them into their own arrays
4. loop through the arrays and check each number if it matches. When one matches take that number and put it into an
5. devide both starting numbers by that number. 
6. put it back into a string.
7. return string.
*/

// I was unable to complete this without help from gpt. It is using Euclidean algorithm to find the greatest common divisor.

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

const simplifiedFractions = (str) => {
    const array = str.split('/');
    const firstNum = Number(array[0]);
    const secondNum = Number(array[1]);

    const greatestCommonDivisor = gcd(firstNum, secondNum);

    let finalFirstNum = firstNum / greatestCommonDivisor;
    let finalSecondNum = secondNum / greatestCommonDivisor;

    if (finalSecondNum < 0) {
        finalSecondNum = finalSecondNum * -1;
        finalFirstNum = -finalFirstNum;
    }


    return `${finalFirstNum}/${finalSecondNum}`;
}

// Test
console.log(simplifiedFractions("-1/2")); // Output: "-1/2"

module.exports = simplifiedFractions;
