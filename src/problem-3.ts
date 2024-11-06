// Problem 3:
// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

{

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence: string = sentence.toLowerCase();
        const lowerCaseWord: string = word.toLowerCase();
        const words: string[] = lowerCaseSentence.split(' ');
        let count: number = 0;
        for (let i = 0; i < words.length; i++) {
            // Check if the current word is equal to the lowercase word and increment the count if it is.
            if (words[i] === lowerCaseWord) {
                count++;
            }
        }
        return count;
    }
    const sentence: string = "The quick brown fox jumps over the lazy dog. The fox is quick."
    const word: string = "the"

    // console.log(countWordOccurrences(sentence, word)) // output: 3

}