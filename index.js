// Requiring our Word constructor function we exported
var Words = require("./words");

//requiring inquirer for user prompt interface
var inquirer = require("inquirer");

//array of words to guess
var words_to_guess = ["CUPCAKE", "BROWNIES", "PIE", "CHEESECAKE", "COOKIES", "MILKSHAKE", "CHOCOLATE", "FLAN", "TART", "SUNDAE"];

//to be used as index for array of words to guess
var counter = 0;

//maximum allowed missed guess
var guesses = 10;

//creating a new Word object
var new_word = new Words();

//for storing each letter of the underlying word in an array
var guess_word = [];


//function that sets up the word (each word from the array of words) to be guessed
var Guessword = function() {

    if (counter < words_to_guess.length) {
        console.log("Try dessert number " + (counter+1) + ':\n');
        guess_word = words_to_guess[counter].split("");     //splits the word into letters and save in array

        for (let j = 0; j < guess_word.length; j++) {
            new_word.addletters(guess_word[j]);             //creates a letter object for each letter
        }
        counter++;          //increment index for next word to be guessed   
        askquestion();      //call user prompt interface
    } else
        //when all words have been used in the array
        console.log("SOLD OUT! You have tried all the desserts! Come again soon.\n");
}

//function that prompts user to guess each letter of the word
var askquestion = function() {

    //run question as long as guesses left is not 0 and not all letters have been guessed yet
    if (guesses != 0 && !(new_word.guessed())) {
        console.log(new_word.word_string() + '\n');
        inquirer.prompt([
            {
            name: "user_entry",
            message: "Type in a letter for your guess."
            }
        ]).then(function(response) {

            //run only if key entered is a letter by checking char code
            if ((response.user_entry.charCodeAt(0) >= 65 && response.user_entry.charCodeAt(0) <= 90) || (response.user_entry.charCodeAt(0) >= 97 && response.user_entry.charCodeAt(0) <= 122)) { 
                var key_pressed = response.user_entry.toUpperCase();   //defaults to Upper Case
                
                if (guess_word.indexOf(key_pressed) !== -1)
                    console.log("\nCORRECT!\n");
                else {
                    guesses--;
                    console.log("\nINCORRECT!\n");
                    console.log("Remaining guesses left: " + guesses + '\n');
                }
                new_word.check_guess(key_pressed); 
            } else
                console.log("Invalid key pressed. Try again.\n");       
                
                askquestion();  //loop until word is guessed or allowed guesses hit 0
            
        });       
    } else {
        if (guesses === 0 && !(new_word.guessed())) 
            console.log("You did not guess the word.\n");
        else {
            console.log(new_word.word_string());
            console.log("You guessed it right!\n"); 
        }
        
        //resets values for the next word to be guessed
        new_word.word_letters = [];
        guesses = 10;
        Guessword(); 
    }
} 

//function to display introduction or instructions
var intro = function() {
    console.log("\nWelcome to Constructor Word-Guess!\n");
    console.log("\nInstructions: Guess the word by typing in a letter. Letter typed");
    console.log("\nwill default to upper case. Non-letters will not be accepted and");
    console.log("\na message will warn you to try again. You can only miss on your guess");
    console.log("\nfor a total of 10 times. Hint: This is dessert-themed. Goodluck!\n");
}

//initial function calls to start the game
intro();
Guessword();