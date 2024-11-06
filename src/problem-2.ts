// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

{
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((value: number, index: number) => numbers.indexOf(value) === index);
    }

    const numbers: number[] = [10, 20, 30, 30, 60, 70, 80];
    // console.log(removeDuplicates(numbers)); // output: [ 10, 20, 30, 60, 70, 80 ]
}