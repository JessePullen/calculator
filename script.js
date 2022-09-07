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

console.log(operate());