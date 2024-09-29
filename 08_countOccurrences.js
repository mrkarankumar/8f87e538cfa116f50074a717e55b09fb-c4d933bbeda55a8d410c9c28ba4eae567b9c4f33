// Approach 1:
function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

// Approach 2: Rewrite the above code without using any loop, and try to implement inbuilt string methods.
function countOccurrences(str, char) {
    // Use the split and filter methods to count occurrences
    const charOccurrences = str.split(char).length - 1;
    return charOccurrences;
}
// Example 1:
console.log(countOccurrences("hello world", "l")) // Output: 3

// Example 1:
console.log(countOccurrences("Elephant", "E")) // Output: 1

// Do not modify the below lines
module.exports = { countOccurrences };