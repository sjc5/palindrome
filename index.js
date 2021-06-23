module.exports = Phrase;


// Adds 'reverse' to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content (ORIGINAL VERSION)
  // this.letters = function letters() {
  //   let theLetters = [];
  //   for (let i = 0; i < this.content.length; i++) {
  //     if (this.content.charAt(i).match(/[a-zA-Z]/)) {
  //       theLetters.push(this.content.charAt(i));
  //     }
  //   }
  //   return theLetters.join("");
  // }

  // Returns the letters in the content (REFACTORED VERSION)
  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}
