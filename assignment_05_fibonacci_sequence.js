// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// Import the readline-sync module for user input
const readlineSync = require('readline-sync');

/**
 * PART A — Generates and prints the first N terms of the Fibonacci sequence.
 * 
 * @param {number} n - The number of terms to generate.
 */
function printFibonacciSequence(n) {
    if (n <= 0 || isNaN(n)) {
        console.log('Error: Please enter a positive integer greater than 0.');
        return;
    }

    const sequence = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            const nextTerm = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextTerm);
        }
    }

    console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

/**
 * PART B — Checks whether a given target number belongs to the Fibonacci sequence.
 * 
 * @param {number} target - The number to check.
 * @returns {boolean} True if the target is a Fibonacci number, false otherwise.
 */
function isFibonacciNumber(target) {
    if (target < 0 || isNaN(target)) {
        return false;
    }

    // Special base cases
    if (target === 0 || target === 1) {
        return true;
    }

    let a = 0;
    let b = 1;
    let c = a + b;

    // Keep generating terms until we reach or exceed the target number
    while (c < target) {
        a = b;
        b = c;
        c = a + b;
    }

    return c === target;
}

/**
 * Main execution function to control program flow.
 */
function main() {
    console.log("=== FIBONACCI SEQUENCE GENERATOR ===\n");

    // --- PART A ---
    console.log("--- PART A: Generate N Terms ---");
    const terms = readlineSync.questionInt("How many terms? ");
    printFibonacciSequence(terms);

    console.log("\n----------------------------------");

    // --- PART B ---
    console.log("--- PART B: Check Fibonacci Membership ---");
    const numToCheck = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacciNumber(numToCheck)) {
        console.log(`${numToCheck} is a Fibonacci number.`);
    } else {
        console.log(`${numToCheck} is NOT a Fibonacci number.`);
    }
}

// Execute the main function
main();