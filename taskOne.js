number = Math.random();

number = number *9 +1;
number = Math.round(number);
numberEntered = parseInt(prompt("enter your number"))
if (number > numberEntered) {
    console.log("Ooopsie, too Low, you should have said " + number)
    
} else if(number < numberEntered) {
    console.log("Ooopsie, too High, you should have said " + number)
    
}
else {
    console.log("მალადეეც!")
}
