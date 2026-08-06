// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// Import the readline-sync module for user input
const readlineSync = require('readline-sync');

/**
 * Adds two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Subtracts the second number from the first.
 */
function subtract(num1, num2) {
    return num1 - num2;
}

/**
 * Multiplies two numbers.
 */
function multiply(num1, num2) {
    return num1 * num2;
}

/**
 * Divides the first number by the second.
 * Returns null if attempting to divide by zero.
 */
function divide(num1, num2) {
    if (num2 === 0) {
        return null;
    }
    return num1 / num2;
}

/**
 * Computes the modulus (remainder) of two numbers.
 * Returns null if attempting modulus by zero.
 */
function modulus(num1, num2) {
    if (num2 === 0) {
        return null;
    }
    return num1 % num2;
}

/**
 * Raises the base number to the power of the exponent.
 */
function exponentiate(base, exponent) {
    return base ** exponent;
}

/**
 * Displays the main calculator menu options.
 */
function displayMenu() {
    console.log('\n============================');
    console.log('       SIMPLE CALCULATOR    ');
    console.log('============================');
    console.log('1. Addition       (+)');
    console.log('2. Subtraction    (-)');
    console.log('3. Multiplication (*)');
    console.log('4. Division       (/)');
    console.log('5. Modulus        (%)');
    console.log('6. Exponentiation (**)');
    console.log('7. Quit');
}

/**
 * Main function to run the interactive calculator loop.
 */
function main() {
    let running = true;

    while (running) {
        displayMenu();
        const choice = readlineSync.questionInt('Select an operation (1-7): ');

        if (choice === 7) {
            console.log('Goodbye!');
            running = false;
            break;
        }

        if (choice < 1 || choice > 7 || isNaN(choice)) {
            console.log('Invalid choice! Please select a number between 1 and 7.');
            continue;
        }

        const num1 = readlineSync.questionFloat('Enter first number : ');
        const num2 = readlineSync.questionFloat('Enter second number: ');
        let result = null;
        let symbol = '';

        switch (choice) {
            case 1:
                result = add(num1, num2);
                symbol = '+';
                break;
            case 2:
                result = subtract(num1, num2);
                symbol = '-';
                break;
            case 3:
                result = multiply(num1, num2);
                symbol = '*';
                break;
            case 4:
                result = divide(num1, num2);
                symbol = '/';
                break;
            case 5:
                result = modulus(num1, num2);
                symbol = '%';
                break;
            case 6:
                result = exponentiate(num1, num2);
                symbol = '**';
                break;
        }

        if (result === null) {
            console.log('Error: Cannot divide by zero.');
        } else {
            console.log(`Result: ${num1} ${symbol} ${num2} = ${result.toFixed(2)}`);
        }
    }
}

// Execute the calculator program
main();