module.exports = { signOfProduct };

function signOfProduct(nums) {
    // Write your code inside this function only.
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else if (nums[i] < 0) {
            negativeCount++;
        }
    }

    if (zeroCount > 0 || negativeCount % 2 === 0) {
        return 0;
    } else {
        return -1;
    }
}
// Example 1:
console.log(signOfProduct([2, -3, 5, 4])) // Output: -1
console.log(signOfProduct([1, 2, 0])) // Output: 0
