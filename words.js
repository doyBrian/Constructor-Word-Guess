// Requiring our Letters constructor function we exported
var Letters = require("./letters");

// Constructor function for creating Word objects
var Word = function() {

    //An array of `new` Letter objects representing the letters of the underlying word
    this.word_letters = [];

    //An array of boolean values of the letter object and its key "guessed_correctly"
    this.letters_guessed;

    //A function that returns a string representing the word. This should call the function 
    //on each letter object (the first function defined in `Letter.js`) that displays the 
    //character or an underscore and concatenate those together.
    this.word_string = function() {

        var word = "";

        for (var i = 0; i < this.word_letters.length; i++) {
            word += this.word_letters[i].display_character();
        }
        return word;
    };

    //A function that takes a character as an argument and calls the guess function on 
    //each letter object (the second function defined in `Letter.js`)
    this.check_guess = function(guess) {
        for (var i = 0; i < this.word_letters.length; i++) {
            this.word_letters[i].check_letter(guess);
        }
    };

    //function that adds all the letters from the underlying word as Letter objects into the array word_letters
    this.addletters = function(letter_from_the_word) {
        this.word_letters.push(new Letters(letter_from_the_word));
    };

    //function that adds each letter object in the word its boolean value of guessed_correctly into an array
    this.guessed = function() {
        this.letters_guessed = [];
        for (var i = 0; i < this.word_letters.length; i++) {
            this.letters_guessed.push(this.word_letters[i].guessed_correctly);
        }
        //checks if all boolean value of letter object guessed_correctly is true
        if (this.letters_guessed.every(isTrue))
            return true;
        else
            return false;
    };

}

//callback function to check if each boolean value of letter object guessed_correctly is true
function isTrue(value) {
    return value === true;
}

// Exporting the Word constructor which we will use in index.js
module.exports = Word;
