function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return number(totalAmount.toFixed(2));
}

// Solution 2: without error

function calculateTip(billAmount, tipPercentage) {
    // Check for valid inputs
    if (billAmount <= 0) {
        return "Invalid Input: Bill amount should be a numeric value";
    }
    if (tipPercentage < 0 || tipPercentage > 1) {
        return "Invalid Input: Tip percentage should be a decimal vlaue between 0 and 1 only.";
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}
// Example 1
console.log(calculateTip(60.75, 0.25)); // 75.94
// Example 2 
console.log(calculateTip(90.00, 0.10)); // 99
// Do not modify the below lines
module.exports = { calculateTip };