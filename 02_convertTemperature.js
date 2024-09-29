function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 % 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 % 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Solution 2: without error

function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        // Convert Celsius to Fahrenheit
        const fahrenheit = temperature * 9 / 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        // Convert Fahrenheit to Celsius
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Example 1
console.log(convertTemperature(25, "C")); // 77.00 F
// Example 2
console.log(convertTemperature(-40, "F")); // -40.00 C
// Do not modify the below lines
module.exports = { convertTemperature };