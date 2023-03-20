// ========= Utility functions =========
function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ========= Selected elements =========
const inputGuess = document.querySelector("#inputGuess");
const form = document.querySelector("form");
const tableGuesses = document.querySelector("#guesses");
const divTheWord = document.querySelector("details > div");
const spanError = document.querySelector("#error");
const btnGuess = document.querySelector("form > button");
const divEndOfGame = document.querySelector("#end-of-game");
const btnRestart = document.querySelector("#restart");

// ========= Solution =========

let word = wordList[random(0, wordList.length - 1)];
divTheWord.innerHTML = word;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  spanError.innerHTML = '';

  inputGuess.select();

  const guess = inputGuess.value;
  const guessLength = inputGuess.value.length;
  if (guessLength !== 5) {
    spanError.innerHTML = 'The length of the word is not 5!';
    return;
  }

  if (wordList.indexOf(guess) === -1) {
    spanError.innerHTML = 'The word is not considered acceptable!';
    return;
  }

  const matchingLetterCount = guess.split('').reduce((partialCount, nextLetter, currentIndex) => {
    if (word[currentIndex] === nextLetter) {
      partialCount++;
    }
    return partialCount;
  }, 0)

  console.log('matchingLetterCount', matchingLetterCount);
})

