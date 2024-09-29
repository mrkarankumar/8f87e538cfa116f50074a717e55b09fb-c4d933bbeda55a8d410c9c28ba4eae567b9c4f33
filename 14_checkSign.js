module.exports = { checkSign };

function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    // check If all three numbers are positive
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        return "+++";

        // check If two numbers are positive and one is negative,
    } else if ((num1 > 0 && num2 > 0 && num3 < 0) || (num1 > 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num2 > 0 && num3 > 0)) {
        return "++-";

        // Check if one number is positive and two are negative
    } else if ((num1 > 0 && num2 < 0 && num3 < 0) || (num1 < 0 && num2 > 0 && num3 < 0) || (num1 < 0 && num2 < 0 && num3 > 0)) {
        return "+--";

        // Check if all three numbers are negative
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        return "---";
    }
}

// Example 1:
console.log(checkSign(2, 5, 7)); // Output: +++
console.log(checkSign(8, -3, 4)); // Output: ++-
