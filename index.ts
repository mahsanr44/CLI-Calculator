var prompt = require('prompt-sync')();

function calculator(){

let number1 = Number(prompt("Enter First Number: "));
while(isNaN(number1)){
    number1 = Number(prompt("Please Enter a Number: "));
}
let number2 = Number(prompt("Enter Second Number: "));
while(isNaN(number2)){
    number2 = Number(prompt("Please Enter a Number:  "));
}

let operator = prompt("Enter an Operator from one of these,+, -, *, /, %: ");

if(operator=='+'){
    console.log(`${number1} + ${number2} = ${number1 + number2}`);
}
else  if(operator=='-'){
    console.log(`${number1} - ${number2} = ${number1 - number2}`);
}
else if(operator=='*'){
    console.log(`${number1} * ${number2} = ${number1 * number2}`);
}
else if(operator=='/'){
    console.log(`${number1} / ${number2} = ${number1 / number2}`);
}
else  if(operator=='%'){
    console.log(`${number1} % ${number2} = ${number1 % number2}`);
}
else
{
console.log("Oops! Invalid Operator.\nTry again.")
}
}
calculator();
while(true){
    let check=prompt(`\nDo you want to calculate again? Type 'y' for yes> `);
    if(check==='y')
    {
        calculator();
    }
    else{
        console.log("Thank you!")
        break;
    }
}