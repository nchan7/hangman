// Variable declarations
var correctWord = "seattle"
var blanks = correctWord.split('').fill("_");
var guessedLetters = "";
var errorsRemain = 5;

// HTML Element References
var inputLetter = document.querySelector('[name="input"]');
var pEl = document.getElementById("word");
pEl.textContent = blanks.join(' ');
var pEl2 = document.getElementById("guess");
var btnEl = document.querySelector("button");


// Create all event listeners
btnEl.addEventListener("click", function (e) {
    var letterInput = inputLetter.value;
    inputLetter.value = "";
    correctLetters = checkLetters(letterInput, correctWord);
    guessedLetters = guessedLetters + " " + letterInput;
    pEl2.textContent = guessedLetters;
})


// Any additional functions
var checkLetters = function (letter, correctWord) {
    var arr = correctWord.split('');
    var indices = [];
    if (arr.includes(letter)) {
        indices = getAllIndexes(arr,letter);
        indices.forEach( function(index) {
            // blanks = blanks.splice(index, 1, letter);
        })
        pEl.textContent = blanks.join(' '); 
        if (arr.toString() === correctWord) {
            alert("Congratulations!")
            return;
        }
        
    } else {
        errorsRemain--;
        if (errorsRemain === 0) {
            alert("Game Over! Sorry try again!");
            return;
        } else {
            alert('You have ' + errorsRemain + ' guesses left.');
            return;
        }
    }
    return arr;
}

var revealLetters



function getAllIndexes(arr, val) {
    var indexes = [];
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}
