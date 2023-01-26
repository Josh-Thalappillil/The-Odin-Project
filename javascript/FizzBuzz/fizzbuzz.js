// User input of number
// Loop from 1 to the entered number
// Numbers that divide by 3 without remainder print Fizz
// Numbers that divide by 5 without remainder print Buzz
// Numbers that divide by both 3 and 5 without remainder print FizzBuzz
// Otherwise print the current number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))
for (let i = 1; i <= answer; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
            console.log("Fizz");
    } else if (i % 5 === 0) {
            console.log("Buzz");
    } else {
            console.log(i);
    }
}



