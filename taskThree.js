let numberOne = parseInt(prompt("enter first number"));
let numberTwo = parseInt(prompt("enter second number"));
let numberThree = parseInt(prompt("enter third number"));
let average = Math.round((numberOne+numberTwo+numberThree)/3)

console.log("the smallest one out of your numbers is " + Math.min(numberOne, numberTwo, numberThree) + 
", the biggest one is " + Math.max(numberOne, numberTwo, numberThree)
+ "and average of your numbers is " + average )