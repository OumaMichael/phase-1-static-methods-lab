class Formatter {
  // Capitalizes the first letter of a given string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Removes all non-alphanumeric characters except for dashes, single quotes, and spaces
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes all words except certain small words, always capitalizing the first word
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return str
      .split(' ')
      .map((word, index) => 
        index === 0 || !exceptions.includes(word.toLowerCase()) 
          ? this.capitalize(word) 
          : word.toLowerCase()
      )
      .join(' ');
  }
}

// Testing the methods
console.log(Formatter.capitalize("hello")); 
// Output: "Hello"

console.log(Formatter.sanitize("Hello! How's @it going?"));
// Output: "Hello How's it going"

console.log(Formatter.titleize("a tale of two cities"));
// Output: "A Tale of Two Cities"

console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog"));
// Output: "The Quick Brown Fox Jumps Over the Lazy Dog"
