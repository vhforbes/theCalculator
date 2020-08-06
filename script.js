function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate (operator, value1, value2) {

    if (operator === '+') return add (value1, value2)
    if (operator === '-') return subtract(value1, value2)
    if (operator === '*') return multiply(value1, value2)
    if (operator === '/') return divide(value1, value2)
    else return 'Error'
}

// Update Display

function updateDisplay(values) {

    let display = document.querySelector('#display')
    display.textContent = values
}

// Start variables
 

let firstValue = 0
let secondValue = 0
let totalValue = 0

let displayValue = ''
let operator = ''

let numberPressed = false
let operationPressed = false
let equalPressed = false


// Numbers button update Display

let allNumbersParent = document.querySelector('#inputButtons')
let numbersBtn = allNumbersParent.querySelectorAll('.btn')

numbersBtn.forEach((button) => { 
    button.addEventListener('click', () => {

            if (operationPressed && secondValue != 0) { // Keep making operations after the first
                secondValue = 0
                firstValue = totalValue
                operationPressed = false

            }

            displayValue += button.value;
            updateDisplay(displayValue);
        
        
    })
})

// Operations Buttons return a result

let allOperationBtn = document.querySelector('#inputButtons')
let operationBtn = allOperationBtn.querySelectorAll('.btn-o')

operationBtn.forEach((button) => {
    button.addEventListener('click', () => {

        operator = button.value
        
        if (firstValue == 0) { // Set the first value
            firstValue = parseInt(displayValue)
        }

        else if (secondValue == 0) { // Set the second value before the operation
            secondValue = parseInt(displayValue)
        }
        
        // Make the operation

        if (firstValue && secondValue) {

            totalValue = operate(operator, firstValue, secondValue)
            updateDisplay(totalValue)

        }

        displayValue = ''
        operationPressed = true
        
        
    })
})

// Equal! 

let equalBtn = document.querySelector('#equal')
    

    equalBtn.addEventListener('click', () => {
        
        if (firstValue == 0) { // Set the first value
            firstValue = parseInt(displayValue)
        }

        else if (secondValue == 0) { // Set the second value before the operation
            secondValue = parseInt(displayValue)
        }

        if (firstValue && secondValue) {

            totalValue = operate(operator, firstValue, secondValue)
            updateDisplay(totalValue)
            firstValue = totalValue

        }
        
        displayValue = ''
        operationPressed = false
        equalPressed = true

        firstValue = totalValue
        secondValue = 0
        
        
    })

let clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', () => {
    firstValue = 0
    secondValue = 0
    totalValue = 0
    updateDisplay(displayValue)
})






