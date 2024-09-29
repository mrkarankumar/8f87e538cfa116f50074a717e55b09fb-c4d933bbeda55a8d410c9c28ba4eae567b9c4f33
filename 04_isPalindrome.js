function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

// Solution 2: without error

function isPalindrome(str) {
    //Convert the input string to lowercase
    const lowerStr = str.toLowerCase();

    // Remove any non-alphanumeric characters (including spaces and punctuation) from the string.
    const cleanedStr = lowerStr.replace(/[^a-z0-9]/g, "");

    // Compare the modified string with its reverse to determine if it is a palindrome.
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}

// Example 1
console.log(isPalindrome("RaceCar")); // true
// Example 2
console.log(isPalindrome("Hello")); // false

// Do not modify the below lines
module.exports = { isPalindrome };