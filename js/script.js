// Credit to http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial


// Variable declarations
var words = ["seattle", "california", "washington", "berkeley"];
var correctWord =  words[Math.floor(Math.random() * words.length)];
var blanks = correctWord.split('').fill("_");
var guessedLetters = "";
var triesLeft = 7;

// HTML Element References
var inputLetter = document.querySelector('[name="input"]');
var pEl = document.getElementById("word");
pEl.textContent = blanks.join(' ');
var pEl2 = document.getElementById("guess");
var btnEl = document.querySelector("button");
var pEl3 = document.getElementById("tries");


// Create all event listeners
btnEl.addEventListener("click", function (e) {
    var letterInput = inputLetter.value;
    inputLetter.value = "";
    correctLetters = checkLetters(letterInput, correctWord);
    guessedLetters = guessedLetters + " " + letterInput;
    pEl2.textContent = guessedLetters;
})

// Show how many guesses people have



// Any additional functions
var guess = function (letter, correctWord) {
    if ( !guessedLetters.includes(letter) ) {
        guessedLetters.concat(letter);
        checkLetters(letter, correctWord); 
    } else {
        alert("You already guessed that letter!")
    }
}

var hangmanImage = function() {
    document.getElementById("hangmanImage").src = "img/" + triesLeft +".jpg";
}



var checkLetters = function (letter, correctWord) {
    var arr = correctWord.split('');
    var indices = [];
    indices = getAllIndexes(arr, letter);
    if (indices.length <= 0) {
        triesLeft--;
        pEl3.textContent = "You have " + triesLeft + " tries left!";
        hangmanImage();
        if (triesLeft <= 0) {
            pEl3.textContent = "Game Over! Sorry try again!";
            return;
        } //else {
        //     alert('You have ' + tries + ' guesses left.');
        //     return;
        // }
    } else {
        indices.forEach( function (index) {
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
function getAllIndexes(arr, val) {
    var indexes = [];
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

guess(letterInput, correctWord);