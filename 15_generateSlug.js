module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
    
 // replacing spaces with hyphens and converting the text to lowercase.
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    return slug + ".com";
}

// Example 1
console.log(generateSlug("Hello World")); // Output: hello-world.com

// Example 2
console.log(generateSlug("AlmaBetter Web Dev")); // Output: almabetter-web-dev.com
