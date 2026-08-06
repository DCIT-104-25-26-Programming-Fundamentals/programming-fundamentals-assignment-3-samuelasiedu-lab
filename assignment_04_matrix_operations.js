// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
/**
 * Helper function to read a matrix from user input.
 * 
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} label - Matrix identifier (e.g., 'A' or 'B').
 * @returns {number[][]} The constructed 2D array.
 */
function readMatrix(rows, cols, label = '') {
    const matrix = [];
    const prefix = label ? `Matrix ${label} - ` : '';

    for (let i = 0; i < rows; i++) {
        let input = readlineSync.question(`${prefix}Enter row ${i + 1}: `);
        // Split by spaces, filter out extra spaces, and convert to numbers
        let rowValues = input.trim().split(/\s+/).map(Number);

        // Simple validation to ensure the user entered the correct number of values
        while (rowValues.length !== cols || rowValues.some(isNaN)) {
            console.log(`Invalid input! Please enter exactly ${cols} space-separated numbers.`);
            input = readlineSync.question(`${prefix}Enter row ${i + 1}: `);
            rowValues = input.trim().split(/\s+/).map(Number);
        }

        matrix.push(rowValues);
    }
    return matrix;
}

/**
 * Helper function to print a 2D matrix in a clean, aligned grid format.
 * 
 * @param {number[][]} matrix - Matrix to display.
 */
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

/**
 * PART A — Transposes an M x N matrix into an N x M matrix.
 * 
 * @param {number[][]} matrix - Input matrix.
 * @returns {number[][]} Transposed matrix.
 */
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

/**
 * PART B — Adds two matrices of the same dimensions (element-wise).
 * 
 * @param {number[][]} matrixA - First matrix (M x N).
 * @param {number[][]} matrixB - Second matrix (M x N).
 * @returns {number[][]} Resulting sum matrix.
 */
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

/**
 * PART C — Multiplies matrix A (M x N) and matrix B (N x P).
 * 
 * @param {number[][]} matrixA - Matrix of size M x N.
 * @param {number[][]} matrixB - Matrix of size N x P.
 * @returns {number[][]} Resulting product matrix of size M x P.
 */
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }

    return result;
}

/**
 * Main function to control application flow.
 */
function main() {
    console.log("=== MATRIX OPERATIONS ===");
    console.log("1. Transpose Matrix");
    console.log("2. Add Two Matrices");
    console.log("3. Multiply Two Matrices");
    const choice = readlineSync.questionInt("Select an operation (1-3): ");

    if (choice === 1) {
        // --- PART A: TRANSPOSE ---
        console.log("\n--- PART A: Transpose Matrix ---");
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");

        const matrix = readMatrix(rows, cols);

        console.log("\nOriginal Matrix:");
        printMatrix(matrix);

        const transposed = transposeMatrix(matrix);

        console.log("\nTransposed Matrix:");
        printMatrix(transposed);

    } else if (choice === 2) {
        // --- PART B: ADDITION ---
        console.log("\n--- PART B: Matrix Addition ---");
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");

        console.log("\nEnter Matrix A:");
        const matrixA = readMatrix(rows, cols, "A");

        console.log("\nEnter Matrix B:");
        const matrixB = readMatrix(rows, cols, "B");

        const sumMatrix = addMatrices(matrixA, matrixB);

        console.log("\nResult (A + B):");
        printMatrix(sumMatrix);

    } else if (choice === 3) {
        // --- PART C: MULTIPLICATION ---
        console.log("\n--- PART C: Matrix Multiplication ---");
        const rowsA = readlineSync.questionInt("Enter Matrix A rows (M): ");
        const colsA = readlineSync.questionInt("Enter Matrix A columns (N): ");

        console.log(`\nNote: Matrix B must have ${colsA} rows.`);
        const rowsB = colsA;
        const colsB = readlineSync.questionInt("Enter Matrix B columns (P): ");

        console.log("\nEnter Matrix A:");
        const matrixA = readMatrix(rowsA, colsA, "A");

        console.log("\nEnter Matrix B:");
        const matrixB = readMatrix(rowsB, colsB, "B");

        const productMatrix = multiplyMatrices(matrixA, matrixB);

        console.log("\nResult (A x B):");
        printMatrix(productMatrix);

    } else {
        console.log("Invalid selection.");
    }
}

// Execute program
main();