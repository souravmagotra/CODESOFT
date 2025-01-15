let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display with the current input
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to choose an operator
function chooseOperator(op) {
    if (currentInput === '') return; // Don't allow operator to be chosen without a number

    if (previousInput !== '') {
        calculateResult(); // Calculate previous operation before setting a new one
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Function to calculate the result
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
