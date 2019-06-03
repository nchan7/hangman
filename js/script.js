// Credit to http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial for some code

// Bugs to be fixed:
// 1. If you solve it, it doesn't reset
// 2. Spaces present an issue
// 3. Image isn't updating properly

// Variable declarations
var words = ["seattle", "california", "washington", "berkeley", "i am coding at ga"];
var correctWord =  words[Math.floor(Math.random() * words.length)];
var blanks = correctWord.split('').fill("_");
var guessedLetters = ""; // Helpful to distinguish between successful guessed array vs. incorrect guesses
var triesLeft = 7;

// HTML Element References
var inputLetter = document.querySelector('[name="input"]');
var pEl = document.getElementById("word");
pEl.textContent = blanks.join(' ');
var pEl2 = document.getElementById("guess");
var btnEl = document.querySelector("button");
var pEl3 = document.getElementById("tries");
var btnEl2 = document.getElementById("reset");


// Create all event listeners

// Guess button
btnEl.addEventListener("click", function (e) {
    var letterInput = inputLetter.value;
    inputLetter.value = "";
    correctLetters = checkLetters(letterInput, correctWord);
    guessedLetters = guessedLetters + " " + letterInput;
    pEl2.textContent = guessedLetters;
})

// Reset button
btnEl2.addEventListener("click", function (e2) {
    guessedLetters = "";
    triesLeft = 7;
    correctWord =  words[Math.floor(Math.random() * words.length)];
    blanks = correctWord.split('').fill("_");
    pEl.textContent = blanks.join(' ');
    pEl2.textContent = guessedLetters;
    pEl3.textContent = "";
    document.getElementByClass("hidden")="";
})





// Any additional functions

// Make my guess
var guess = function (letter, correctWord) {
    if ( !guessedLetters.includes(letter) ) {
        guessedLetters.concat(letter);
        checkLetters(letter, correctWord); 
    } else {
        alert("You already guessed that letter!")
    }
}

// Update the image
var revealHangmanImage = function() { // Name functions as verbs!
    document.getElementById("hangmanimage" + triesLeft).classList.remove("hidden") //.classList accesses all of the classes that are applied
}


// Check if the letter is in the word
var checkLetters = function (letter, correctWord) {
    var arr = correctWord.split('');
    var indices = [];
    indices = getAllIndexes(arr, letter); // Stores all indexes of the correct letter in indices
    if (indices.length <= 0) { // If the indices array is 0 or less which means the correct letter has not been identified
        triesLeft--;
        pEl3.textContent = "You have " + triesLeft + " tries left!";
        if (triesLeft <= 0) {
            pEl3.textContent = "Game Over! Sorry try again!";
            return;
        } //else {
        //     alert('You have ' + tries + ' guesses left.');
        //     return;
        // }
        revealHangmanImage(); //Update the image
    } else {
        indices.forEach( function (index) { // Fill in the blanks
            blanks[index] = letter;
        });
        pEl.textContent = blanks.join(' '); 
        if (blanks.join('') === correctWord) {
            pEl3.textContent = "Congratulations!"
            return;
    }
    // if (arr.includes(letter)) {
    //     indices = getAllIndexes(arr,letter);
    //     indices.forEach( function(index) {
    //         blanks = blanks.splice(index, 1, letter);
    //     })
    //     pEl.textContent = blanks.join(' '); 
    //     if (arr.toString() === correctWord) {
    //         alert("Congratulations!")
    //         return;
    //     }
        
    // } else {
    //     tries--;
    //     if (tries === 0) {
    //         alert("Game Over! Sorry try again!");
    //         return;
    //     } else {
    //         alert('You have ' + tries + ' guesses left.');
    //         return;
    //     }
    // }
    // return arr;
    }
}

// var revealLetters


// Credit for the following function to https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array
// Get indexes of location of the correct letters
function getAllIndexes(arr, val) {
    var indexes = [];
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

// function checkForWin() {
//     // Can check if blanks array has underscores
//     // Throw message
//     // Disable button or use game over variable (true or false) to disable button or remove the event listener 
// }

// function checkfForLoss() {

// }

// Run the guess function based on the word list and the input letter
guess(letterInput, correctWord);

