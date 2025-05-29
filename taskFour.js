let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789"
let passWord = ""


for (let i =0; i < 8; i++){
let index = Math.floor(Math.random() * symbols.length);
passWord = passWord + symbols[index];
}


console.log(passWord)

