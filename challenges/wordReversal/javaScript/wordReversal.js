/*

Understanding the problem:
take in a string of of a sentence
output the string as a sentence but with each word spelled backwards 

Plan:
initiate an array
turn the string into an array seperated by each word
loop through the array taking each index and looping through it backwords pushing it into the array.
turn the new array into a string and return it.

*/


function reverseWords(sentence){
    const sentArray = sentence.split(' ')
    let backwordsWord = []
   


    for (let i = 0; i < sentArray.length; i++){
        const word = sentArray[i]
        const wordArray = word.split('')
        let newWord = []
    
        for (let j = wordArray.length -1; j >= 0; j--){
            const letter = wordArray[j]
            newWord.push(letter)

        }
        const newStringWord = newWord.join('')
        backwordsWord.push(newStringWord)
        
    }
    const res = backwordsWord.join(' ')
    return res;


}

console.log(reverseWords('this is a test word and sentence'))

module.exports = reverseWords;