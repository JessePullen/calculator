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

//Takes items from array and calls operate function to perform relevant operation
//displays the answer and updates array
equals.addEventListener('click', () => {
    if (total.length > 1) {
        total.push(display.textContent);
        let operator = total[1];
        answer = operate(operator, Number(total[0]), Number(total[2]));
        display.textContent = answer;
        total = [];
        total.push(display.textContent);
        totalDisplay.textContent = null;
        console.log(total);
    }
});

add.addEventListener('click', () => {
    let operator = ' + ';
    total.push(display.textContent, operator);

    display.textContent = null;
    iterateArray(total);
});

subtract.addEventListener('click', () => {
    let operator = ' - ';
    total.push(display.textContent, operator);

    display.textContent = null;
    iterateArray(total);
});

divide.addEventListener('click', () => {
    let operator = ' / ';
    total.push(display.textContent, operator);

    display.textContent = null;
    iterateArray(total);
});

multiply.addEventListener('click', () => {
    let operator = ' * ';
    total.push(display.textContent, operator);

    display.textContent = null;
    iterateArray(total);
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
    display.textContent += '.';
});

//Function buttons
clear.addEventListener('click', () => {
    display.textContent = null;
    totalDisplay.textContent = null;
    total = [];
});
ac.addEventListener('click', () => {
    display.textContent = null;
});

//Outputs the contents of the display in a better format and displays it on the screen
function iterateArray(array) {
    totalDisplay.textContent = (array.reduce((prevValue, currentValue) => prevValue + currentValue));
}

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