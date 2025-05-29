let text = prompt("enter you text");


let result = text.includes("javaScript");
let textTwo
if (result == true) {
    textTwo = "includes"
    
} else {
    textTwo = "doesn't include"
    
};




console.log ("you have " + text.split(" ").length + " words and " + text.split("").length + " symbols in your sentence and your text " 
+ textTwo + " the word \"javaScript\"");