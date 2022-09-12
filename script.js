const clear = document.querySelector('.clear');
const ac = document.querySelector('.ac');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const period = document.querySelector('.period');
const equals = document.querySelector('.equals');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const display = document.querySelector('.display');
const totalDisplay = document.querySelector('.total-display');



function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}


//Takes an operator and 2 numbers and then calls the specified function to calculate the result
function operate() {
    let operator = prompt('+ - * /');
    let num1 = parseInt(prompt('Number 1'));
    let num2 = parseInt(prompt ('Number 2'));
    let result = 0;

    if (operator === '+') {
        operatorType = addition;
    } else if (operator === '-') {
        operatorType = ion;
    } else if (operator === '*') {
        operatorType = multiplication;
    } else if (operator === '/') {
        operatorType =sion;
    }

    result = operatorType(num1, num2);

    return result;
}

function runProgram() {
}

runProgram();