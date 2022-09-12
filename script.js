const clear = document.querySelector('.clear');
const ac = document.querySelector('.ac');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const period = document.querySelector('.period');
const equals = document.querySelector('.equals');
const zero = document.querySelector('.0');
const one = document.querySelector('.1');
const two = document.querySelector('.2');
const three = document.querySelector('.3');
const four = document.querySelector('.4');
const five = document.querySelector('.5');
const six = document.querySelector('.6');
const seven = document.querySelector('.7');
const eight = document.querySelector('.8');
const nine = document.querySelector('.9');
const display = document.querySelector('.display');
const totalDisplay = document.querySelector('.total-display');



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


//Takes an operator and 2 numbers and then calls the specified function to calculate the result
function operate() {
    let operator = prompt('+ - * /');
    let num1 = parseInt(prompt('Number 1'));
    let num2 = parseInt(prompt ('Number 2'));
    let result = 0;

    if (operator === '+') {
        operatorType = add;
    } else if (operator === '-') {
        operatorType = subtract;
    } else if (operator === '*') {
        operatorType = multiply;
    } else if (operator === '/') {
        operatorType = divide;
    }

    result = operatorType(num1, num2);

    return result;
}

function runProgram() {
}

runProgram();