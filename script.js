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

let total = [];
let answer = 0;
display.textContent = null;
totalDisplay.textContent = total;

//Outputs the contents of the total array in a better format and displays it on the screen
function iterateArray(array) {
    totalDisplay.textContent = (array.reduce((prevValue, currentValue) => prevValue + currentValue));
}

//Calculate what is stored in the total array and displays result
function sumEquals(operator) {
    if (total.length > 1) {
        total.push(display.textContent);
        answer = operate(operator, Number(total[0]), Number(total[2]));
        display.textContent = answer;
        total = [];
        total.push(display.textContent);
        totalDisplay.textContent = null;
    }
}

//Calls the sumEquals function or uses the operator pressed and number on display
function sumOperator(operator) {
    if (total.length > 1) {
        operator = total[1];
        sumEquals(operator);
    } else {
        total = [];
        total.push(display.textContent, operator);
        iterateArray(total);
        display.textContent = null;
    }
}

add.addEventListener('click', () => {
    let operator = ' + ';
    sumOperator(operator);
});

subtract.addEventListener('click', () => {
    let operator = ' - ';
    sumOperator(operator);
});

divide.addEventListener('click', () => {
    let operator = ' / ';
    sumOperator(operator);
});

multiply.addEventListener('click', () => {
    let operator = ' * ';
    sumOperator(operator);
});

equals.addEventListener('click', () => {
    let operator = total[1];
    sumEquals(operator);
});

//Adds event listeners to buttons on the calculator
zero.addEventListener('click', () => {
    display.textContent += 0;
});
one.addEventListener('click', () => {
    display.textContent += 1;
});
two.addEventListener('click', () => {
    display.textContent += 2;
});
three.addEventListener('click', () => {
    display.textContent += 3;
});
four.addEventListener('click', () => {
    display.textContent += 4;
});
five.addEventListener('click', () => {
    display.textContent += 5;
});
six.addEventListener('click', () => {
    display.textContent += 6;
});
seven.addEventListener('click', () => {
    display.textContent += 7;
});
eight.addEventListener('click', () => {
    display.textContent += 8;
});
nine.addEventListener('click', () => {
    display.textContent += 9;
});
period.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        if (display.textContent == '') {
            display.textContent += '0.';
        } else {
            display.textContent += '.';
        }
    }
});

//Clear buttons
clear.addEventListener('click', () => {
    display.textContent = null;
    totalDisplay.textContent = null;
    total = [];
});

ac.addEventListener('click', () => {
    display.textContent = null;
});

//Operator functions
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
function operate(operator, num1, num2) {
    if (operator === ' + ') {
        operatorType = addition;
    } else if (operator === ' - ') {
        operatorType = subtraction;
    } else if (operator === ' * ') {
        operatorType = multiplication;
    } else if (operator === ' / ') {
        operatorType = division;
    }
    return result = operatorType(num1, num2);
}