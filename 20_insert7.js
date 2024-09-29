module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.

let result = '';
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        if (char !== ' ') {
            // Increment the count for non-space characters
            count++;

            if (count === 6) {
                // Insert "7" and reset the count
                result += char + '7';
                count = 0;
            } else {
                result += char;
            }
        } else {
            // Add spaces without incrementing the count
            result += char;
        }
    }

    // Append any remaining characters
    return result;
}

// Example usage:
const str = "Hello World and Universe!"
console.log(insert7(str)); // Output: Hello W7orld an7d Unive7rse!
