// VARIABLES
var lettersGuessed = [];
var possible = ["a","b","d","e","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","w","x","y"]
var wins = 0;
console.log(wins);
var losses = 0;
var guessesLeft = 8;
var gameOver = false;

// DOM ELEMENTS
// variable to reference the span
var userGuess = document.getElementById("Guess");

// FUNCTIONS                                                  

//Computer randomly chooses a letter
    var computerGuess = possible[Math.floor(Math.random() * possible.length)];
    console.log(computerGuess);
    
// This function is run whenever the user presses a key.    
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    console.log(lettersGuessed);

    Guess.textContent = lettersGuessed;
    

    //if statements:
    if (userGuess === computerGuess) {
        wins++; alert("Awesome, great minds think alike!!");
        guessesLeft == 8; // increase wins and reset remaining guesses    
    } else if (userGuess !== computerGuess) {
        guessesLeft--; // decrease guesses remaining
    } else if (guessesLeft == "0") {
        losses++; alert("Hmm, persistence is key. Try again!")
        gameOver = true; guessesLeft == "8"; // increase losses and remaining guesses
    }
};


    // Create html content to display
    var html =
    "<p>Wins: " + wins + "</P>" + 
    "<p>Losses: " + losses + "</p>" +
    "<p>Remaining guesses: " + guessesLeft + "</p>";

    // Set the inner HTML contents of #psychic div to html string
    document.querySelector("#psychic").innerHTML = html;
    

// EVENT LISTENERS

// guess what letter the computer chose in 8 or less guesses. Computer chooses letters randomly. Show what letters were already guessed. If the letter is guess correctly, wins go up by 1. If the letter is not guessed correctly in 8 tries then losses go up by 1. Display how many guesses are remaining. Compare letter guessed to computer guess.
//Add reset function; use getelementbyid to get innerHTML to show on page. Create span.