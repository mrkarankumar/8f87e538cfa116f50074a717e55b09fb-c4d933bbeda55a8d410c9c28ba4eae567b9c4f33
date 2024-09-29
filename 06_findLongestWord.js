// Approach 1:
function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Approach 2: Rewrite the above code using for…of loop.
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}
// Example 1:
const sentence1 = "Coding is fun with fellow learners";
console.log(findLongestWord(sentence1)); // Output: 8

// Example 2:
const sentence2 = "The quick brown fox jumped over the lazy dog";
console.log(findLongestWord(sentence2)); // Output: 6

// Do not modify the below lines
module.exports = { findLongestWord };