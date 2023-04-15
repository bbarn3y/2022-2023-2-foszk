// Form

const formEl = document.querySelector('#form');
const availableInputEl = document.querySelector('#availableInCinemas');
const nextInputEl = document.querySelector('#next');
const protagonistInputEl = document.querySelector('#protagonist');
const titleInputEl = document.querySelector('#title');

let state;
const stateStorageKey = 'state';

[availableInputEl, nextInputEl].forEach((inputEl) => {
    inputEl.addEventListener('input', (event) => {
        validate();
    })
})

formEl.addEventListener('submit', (event) => {

});

function init() {
    validate();
}

function save() {

}

function validate() {

}

init();
validate();

