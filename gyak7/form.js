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
    event.preventDefault();

    if ([...form.elements].every((formElement) => formElement.validity.valid)) {
        console.log('Form is valid');
        save();
    }
});

function init() {
    validate();

    const state = localStorage.getItem(stateStorageKey);
    if (state) {
        const stateObj = JSON.parse(state);
        availableInputEl.value = stateObj.available;
        nextInputEl.value = stateObj.next;
        protagonistInputEl.value = stateObj.protagonist;
        titleInputEl.value = stateObj.title;
    }
}

function save() {
    const state = {
        available: availableInputEl.value,
        next: nextInputEl.value,
        protagonist: protagonistInputEl.value,
        title: titleInputEl.value,
    }
    localStorage.setItem(stateStorageKey, JSON.stringify(state));
}

function validate() {
    if (availableInputEl.value === 'yes' && !nextInputEl.value) {
        nextInputEl.setCustomValidity('Ha játszák még moziban, akkor add meg a következő adás dátumát!')
    } else {
        nextInputEl.setCustomValidity('');
    }
}

init();
validate();

