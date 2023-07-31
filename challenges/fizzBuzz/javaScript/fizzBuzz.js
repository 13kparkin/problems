// programatically check if something is multiples of 3 by using modular 3 and seeing if its === to 0 example 9 % 3. which would come out to true.
// do the same with 5


function fizzBuzz(num) {

    for (let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 !== 0 && i >= 3){
            console.log("Fizz")
        } else if (i % 5 === 0 && i % 3 !== 0  ){
            console.log("Buzz")
        } else if (i % 3 === 0 && i % 5 === 0 ){
            console.log("FizzBuzz")
        }
        else {
            console.log(i)
        }
    }

}

fizzBuzz(15)

module.exports = fizzBuzz;