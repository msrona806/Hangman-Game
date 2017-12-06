<script type="text/javascript">

// variable to reference the span
var userGuess = document.getElementById("userGuess");

// function to execute for onkeyup event 
document.onkeyup = function(event) {
        userGuess.textContent = event.key;
};

// empty array to show letters guessed
var letter = [];
var lettersGuessed;

// loop letters to the empty array
for (var g = 0; g < lettersGuessed.length; g++) {    lettersGuessed.push(letter);
}

// variable html to keep track of letters guessed
var html = 
    "<p>Letters already guessed: " + userGuess + "</p>";

document.queryselector("#game").innerHTML = html;

var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

while (emptyString.length < 6) {
  emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
} 
console.log(emptyString);


</script>  