module.exports = { reverseString };

function reverseString(str) {
    // Write your code inside this function only.
const reversedString = str.split('').reverse().join('');
    return reversedString;
}

// Example 1:
console.log(reverseString("javaScript")); // Output: tpircSavaj
console.log(reverseString("AlmaBetter University")); // Output: ytisrevinU retteBamlA
