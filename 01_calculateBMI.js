function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 || bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Solution 2: without  error

function calculateBMI(weight, height) {
    // Check for valid inputs
    if (weight <= 0 || height <= 0) {
        return "Invalid Input: Input must be positive values.";
    }
    // Calculate BMI (weight in (kilograms) & Height in (Meters)
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example 1
console.log(calculateBMI(65, 1.75)); // Normal weight
// Example 2
console.log(calculateBMI(45, 1.60)); // Underweight

// Do not modify the below lines
module.exports = { calculateBMI };