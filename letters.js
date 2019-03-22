// Constructor function for creating Letter objects
var Letter = function(character) {
    
    //A string value to store the underlying character for the letter
    this.character = character;

    //A boolean value that stores whether that letter has been guessed yet
    this.guessed_correctly = false;

    //A function that returns the underlying character if the letter has been 
    //guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.display_character = function() {   
        if (this.guessed_correctly) 
            return this.character + ' ';
        else 
            return '_ ';        
    };

    //A function that takes a character as an argument and checks it against the 
    //underlying character, updating the stored boolean value to true if it was guessed correctly
    this.check_letter = function(letter) {
        if (letter === this.character) 
            this.guessed_correctly = true;       
    };
};

// Exporting our Letter constructor. We will require it in words.js
module.exports = Letter;