function substr(mainStr: string, subStr: string): number {
    // Use the built-in indexOf method to find the position of the substring
    const index = mainStr.indexOf(subStr);
    return index !== -1 ? index : -1;
}

// Example usage
console.log(substr("Hello World", "Hell"));  // Output: 0
console.log(substr("Hello World", "lo Wo")); // Output: 3
console.log(substr("Hello World", "He ll")); // Output: -1
