module.exports = { findMove };

function findMove(s) {
    // Write your code inside this function only.

    const possibleMoves = [];

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            const newState = s.substring(0, i) + '--' + s.substring(i + 2);
            possibleMoves.push(newState);
        }
    }

    return possibleMoves;
}

// Example usage:
const inputString = "++++";
const moves = findMove(inputString);
console.log(moves); // Output: ["--++", "+--+", "++--"]
