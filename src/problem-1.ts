// Q: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const numbers = [10, 20, 30, 60, 70, 80]

function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, number) => sum + number, 0);
}

const totalNumber = sumArray(numbers)

// console.log("total number is", totalNumber) // output: total number is 270