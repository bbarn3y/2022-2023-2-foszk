// Delegation
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

let adversaryInterval;
let gameOver = false;
const solution = randomNumber(1, 100);
console.log('solution', solution);

const containerEl = document.getElementById('container');

function adversaryGuess() {
    const availableNumbers = [...document.querySelectorAll('.cell')]
        .filter((cellEl) => cellAvailable(cellEl))
        .map((cellEl) => +cellEl.textContent);

    console.log('availableNumbers', availableNumbers);

    const adversarysGuess = availableNumbers[randomNumber(0, availableNumbers.length - 1)]

    console.log('adversarysGuess', adversarysGuess)
}

function cellAvailable(cell) {
    return !cell.classList.contains('player-wins') &&
        !cell.classList.contains('player-wrong-guess')
}

function createGrid() {
    function createRow(rowId) {
        return [...new Array(10).keys()]
            .map(i => i + 1)
            .map((colNumber) => `<div class="cell">${rowId * 10 + colNumber}</div>`)
            .join('');
    }

    const html = [...new Array(10).keys()].map((rowNumber) => {
        return createRow(rowNumber);
    }).join('<br>');

    // console.log(html);

    containerEl.innerHTML = html;
}

createGrid();

delegate(containerEl, 'click', '.cell',  function (event) {
    // console.log(this, event);
    if (!cellAvailable(this) || gameOver) {
        return;
    }

    const guess = +this.textContent;

    console.log('guess', guess);

    if (solution === guess) {
        this.classList.add('player-wins');
        gameOver = true;
        return;
    }

    this.classList.add('player-wrong-guess');
});

window.setInterval(() => {
    adversaryGuess();
}, 5000);



/**
 * Form, regexp, localStorage
 */
const formEl = document.querySelector('#form');
const availableEl = formEl.elements['availableInCinemas'];
const nextEl = formEl.elements['next'];
const protagonistEl = formEl.elements['protagonist'];
const titleEl = formEl.elements['title'];

function initForm () {

}

function validateNext() {

}

function submitForm(event) {

}

initForm();
