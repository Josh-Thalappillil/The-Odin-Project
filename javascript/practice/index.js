
        const button = document.querySelector("button");

        function greet(){
            const name = prompt("What is your name?");
            alert(`Hello ${name}, nice to see you!`);
        }
        button.addEventListener("click", greet);



const firstName = "Joshua"
const lastName = "Tha"
const thisYear = 2023
const birthYear = 1999

greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting)
