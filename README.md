# Constructor-Word-Guess
A Word Guess command-line game using constructor functions.

### Overview

This was an  **optional** homework assignment.


## Game Design Layout

1. The game is able to receive user input using the `inquirer` npm packages.

2. The fully functional game contains three files:

* **letters.js**: Contains a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. The constructor will define:

* A string value to store the underlying character for the letter

* A boolean value that stores whether that letter has been guessed yet

* A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

* A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **words.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. The constructor will define:

* An array of `new` Letter objects representing the letters of the underlying word

* An array of Letter object's boolean value of whether that letter has been guessed or not

* A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `letters.js`) that displays the character or an underscore and concatenate those together.

* A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `letters.js`)

* A function that takes a character as an argument and adds that as letter object into the array of  `new` Letter objects representing the letters of the underlying word

* A function that takes a character as an argument and adds that as letter object into the array of  `new` Letter objects representing the letters of the underlying word

* A function that checks the array of Letter object's boolean value of whether that letter has been guessed or not to determine if the word has been guessed

* **index.js**: The file containing the logic for the course of the game, which depends on `words.js` and:

* Selects a word in an array sequentially and uses the `Word` constructor to store it

* Prompts the user for each guess and keeps track of the user's remaining guesses

3. `letters.js` *does not* `require` any other files.

4. `words.js` *only* require `letters.js`


<a href="https://drive.google.com/file/d/1fzZnOizYWimAjwF1CcrUfO8SaRK7SwYA/view" target="blank">CLICK HERE </a> for a quick DEMO.

