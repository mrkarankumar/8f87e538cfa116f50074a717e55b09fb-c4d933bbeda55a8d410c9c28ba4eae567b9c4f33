// Approach 1:
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 4 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

// Approach 2: Rewrite the above code using switch statement.
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let output = '';

        switch (true) {
            case i % 3 === 0 && i % 4 === 0:
                output = "FizzBuzz";
                break;
            case i % 3 === 0:
                output = "Fizz";
                break;
            case i % 4 === 0:
                output = "Buzz";
                break;
            default:
                output = i.toString();
                break;
        }

        result.push(output);
    }

    return result;
}
// Example 1
console.log(fizzBuzz(12));
// Output: ["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]

// Example 2
console.log(fizzBuzz(5));
// Output: ["1", "2", "Fizz", "Buzz", "5"]

// Do not modify the below lines
module.exports = { fizzBuzz };