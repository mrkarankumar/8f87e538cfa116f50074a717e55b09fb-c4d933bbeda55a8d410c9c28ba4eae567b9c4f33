// Approach 1:
function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

// Approach 2: Rewrite the above code using map method.
function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const titleCaseWord = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCaseWord.join(' ');
}

// Example 1:
const input1 = "Dream big, work hard, and stay focused"
console.log(titleCase(input1)); // Output: Dream Big, Work Hard, And Stay Focused

// Example 2:
const input2 = "Be yourself; everyone else is already taken."
console.log(titleCase(input2)); // Output: Be Yourself; Everyone Else Is Already Taken.

// Do not modify the below lines
module.exports = { titleCase };