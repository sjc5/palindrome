# activefog-palindrome

## install
`sudo npm install activefog-palindrome`
  
## usage
Add the package at the top of your JavaScript file as follows:

`let Phrase = require("activefog-palindrome");`

Phrase is a constructor method that takes a string and creates an object with the string stored in `this.content` and a palindrome-checking method saved in `this.palindrome`.

In practice, you can do this as follows:
`let phrase = new Phrase("some string");`
  
Now, you can check whether the string is a palindrome by calling `phrase.palindrome()`, which will return false if the string is not a palindrome and true if the string is a palindrome.
