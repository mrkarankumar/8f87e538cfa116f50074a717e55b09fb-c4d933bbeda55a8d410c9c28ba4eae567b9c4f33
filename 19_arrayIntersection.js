module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.

    // Use a Set to store unique elements of array1
    const uniqueElements = new Set(array1);

    // Filter the elements of array2 that are present in uniqueElements
    const intersection = array2.filter((element) => uniqueElements.has(element));

    return [...intersection]; // Convert the result back to an array
}

// Example 1
const arr1 = [1, 2, 2, 3, 4, 5]
const arr2 = [2, 3, 3, 6]
console.log(arrayIntersection(arr1, arr2)); // Output: [ 2, 3, 3 ]

// Example 2
const arr3 = [70, 20, 30, 50]
const arr4 = [30, 40, 50, 60, 70]
console.log(arrayIntersection(arr3, arr4)); // Output: [ 30, 50, 70 ]
