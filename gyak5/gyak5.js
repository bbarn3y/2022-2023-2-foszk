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

}

function cellAvailable(target) {

}

function createGrid() {

}

createGrid();

// delegate(, '', '', (event) => {
//
// });



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
