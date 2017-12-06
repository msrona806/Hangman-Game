//VARIABLES
// empty array to show letters guessed
var letter = [];
var lettersGuessed = [];


// DOM ELEMENTS
// variable to reference the span
var userGuess = document.getElementById("userGuess");

// FUNCTION
// function to execute for onkeyup event 
document.onkeyup = function(event) {
    var keyPressed = event.key;
    lettersGuessed.push(keyPressed);
    console.log(lettersGuessed);
    userGuess.textContent = lettersGuessed;

};

// EVENT LISTENERS



// Get a word to play
// figure how long that word is
// show _ for every letter of array
// listen for key presses
// check if key press corresponds to a letter in the word 


// EXAMPLE
var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

while (emptyString.length < 6) {
  emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
} 
console.log(emptyString);


