function substr(mainStr: string, subStr: string): number {
    const mainLen = mainStr.length;
    const subLen = subStr.length;

    // Edge case: if the substring is longer than the main string
    if (subLen > mainLen) return -1;

    // Iterate through the main string
    for (let i = 0; i <= mainLen - subLen; i++) {
        let match = true;

        // Check if the substring matches at this position
        for (let j = 0; j < subLen; j++) {
            if (mainStr[i + j] !== subStr[j]) {
                match = false;
                break;
            }
        }

        // If a match is found, return the starting index
        if (match) return i;
    }

    // If no match is found, return -1
    return -1;
}

// Example usage
console.log(substr("Hello World", "Hell"));  // Output: 0
console.log(substr("Hello World", "lo Wo")); // Output: 3
console.log(substr("Hello World", "He ll")); // Output: -1
