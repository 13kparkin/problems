/*
Understanding the problem:
input: string
objective: find out if a string is a palindrome
output: boolean
palindrome definition: a palindrome is a word or sentence that is the same forwards as it is backwords

Plan:
1. convert string into an array
2. check if index 0 and index 1 are the same. if not return false
2.5. create a blank arraay
3. loop through the array backwards pushing each letter into a new array
4. Check if the two arrays are ===

*/

function isPalindrome(str) {

    const strArray = str.split('')
    let bckwardsArray = [];

    for (let i = strArray.length - 1; strArray.length > bckwardsArray.length; i--){
        bckwardsArray.push(strArray[i]);
    }

    const bckString = bckwardsArray.join('')
    if (str.toLowerCase() === bckString.toLowerCase()){
        return true;
    } else {
        return false;
    }

}


module.exports = isPalindrome;