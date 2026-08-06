// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// Import the readline-sync module for user input
const readlineSync = require('readline-sync');

/**
 * PART A — Prints the multiplication table for a single number from 1 to 12.
 * 
 * @param {number} n - The number to generate the table for.
 */
function printSingleTable(n) {
    if (n <= 0 || isNaN(n)) {
        console.log('Error: Please enter a positive integer greater than 0.');
        return;
    }

    console.log(`\nMultiplication Table for ${n}:`);
    for (let i = 1; i <= 12; i++) {
        // Pads output slightly for neat alignment (e.g., 5 x  2 =  10)
        const multiplier = String(i).padStart(2, ' ');
        const result = String(n * i).padStart(3, ' ');
        console.log(`${n}  x  ${multiplier}  =  ${result}`);
    }
}

/**
 * PART B — Prints multiplication tables from 1 up to N (1 to 12 for each).
 * 
 * @param {number} limit - The upper limit N for table generation.
 */
function printMultipleTables(limit) {
    if (limit <= 0 || isNaN(limit)) {
        console.log('Error: Please enter a positive integer greater than 0.');
        return;
    }

    for (let current = 1; current <= limit; current++) {
        printSingleTable(current);
        if (current < limit) {
            console.log('---------------------------');
        }
    }
}

/**
 * Main execution function to control program flow.
 */
function main() {
    console.log("=== MULTIPLICATION TABLE GENERATOR ===\n");
    console.log("1. Generate table for a single number");
    console.log("2. Generate tables from 1 to N");
    
    const option = readlineSync.questionInt("\nSelect an option (1 or 2): ");

    if (option === 1) {
        // --- PART A ---
        const num = readlineSync.questionInt("Enter a number: ");
        printSingleTable(num);
    } else if (option === 2) {
        // --- PART B ---
        const maxNum = readlineSync.questionInt("Enter upper limit N: ");
        printMultipleTables(maxNum);
    } else {
        console.log("Invalid option selected.");
    }
}

// Execute the main function
main();