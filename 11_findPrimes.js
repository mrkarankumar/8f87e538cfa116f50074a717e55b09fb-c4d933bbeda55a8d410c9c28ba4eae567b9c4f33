module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code here
    const primes = [];

    for (let num = 2; num <= n; num++) {
        let isPrime = true;

        // Check if num is divisible by any number from 2 to its square root
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        // If num is prime, add it to the primes array
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

// Example usage:
console.log(findPrimes(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]

