// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// Import the readline-sync module for user input
const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in an array.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The total sum.
 */
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * Calculates the average of numbers in an array.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The average value.
 */
function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    return calculateSum(arr) / arr.length;
}

/**
 * Finds the maximum number in an array without using Math.max().
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The highest number.
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * Finds the minimum number in an array without using Math.min().
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The lowest number.
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

/**
 * Main function to control execution flow.
 */
function main() {
    // Read total count from user
    const count = readlineSync.questionInt('How many numbers? ');

    // Validate positive integer input
    if (count <= 0 || isNaN(count)) {
        console.log('Error: Count must be a positive integer greater than 0.');
        return;
    }

    const numbers = [];

    // Collect array inputs from the user
    for (let i = 0; i < count; i++) {
        const num = readlineSync.questionFloat(`Enter number ${i + 1}: `);
        numbers.push(num);
    }

    // Perform calculations
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMax(numbers);
    const min = findMin(numbers);

    // Display formatted results
    console.log('\nResults:');
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${max}`);
    console.log(`Minimum: ${min}`);
}

// Execute the program
main();