const drawEl = document.getElementById('draw');
const newEl = document.getElementById('new');
const selectEl = document.getElementById('game');
const tableEl = document.querySelector('table');
const task6El = document.getElementById('task6');
const task7El = document.getElementById('task7');
const task8El = document.getElementById('task8');
const task9EL = document.getElementById('task9');
const tasksEl = document.getElementById('tasks');

let selectedGame;
let rows = 0;
let columns = 0;
let selectedNumbers = [];
let winningNumbers;

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

function drawLottery(n){
    const limits = {5 : 90, 6 : 45, 7 : 35}
    if (!limits.hasOwnProperty(n)) return [];
    const limit = limits[n]
    let draw = []
    while (draw.length < n){
        let rand = Math.floor(Math.random() * limit) + 1
        if (!draw.includes(rand)) draw.push(rand)
    }
    return draw.sort((u, v) => u - v)
}

function generateTable(rowCount, columnCount) {
    let html = '';
    for (let i = 0; i < rowCount; i++) {
        html += '<tr>';
        for (let j = 0; j < columnCount; j++) {
            html += `<td>${i * columnCount + j + 1}</td>`;
        }
        html += '</tr>'
    }
    tableEl.innerHTML = html;
}

newEl.addEventListener('click', (event) => {
    newEl.setAttribute('disabled', '');
    selectEl.setAttribute('disabled', '');

    selectedGame = selectEl.value;
    switch (selectedGame) {
        case '5':
            rows = 10;
            columns = 9;
            break;
        case '6':
            rows = 5;
            columns = 9;
            break;
        case '7':
            rows = 5;
            columns = 7;
            break;
    }
    generateTable(rows, columns);
});

delegate(tableEl, 'click', 'td', function (event) {
    const selectedValue = +this.innerText;
    if (selectedNumbers.includes(selectedValue)) {
        const selectedIndex = selectedNumbers.indexOf(selectedValue);
        selectedNumbers.splice(selectedIndex, 1);
        this.classList.remove('played');
    } else {
        if (selectedNumbers.length === +selectedGame) {
            return;
        }
        selectedNumbers.push(selectedValue);
        this.classList.add('played');
    }

    if (selectedNumbers.length === +selectedGame) {
        tasksEl.style.display = 'block';
    } else {
        tasksEl.style.display = 'none';
    }
})

drawEl.addEventListener('click', (event) => {
    winningNumbers = drawLottery(selectedGame);
    task6El.innerText = winningNumbers.join(', ');

    const matchingNumbers = winningNumbers.filter((winningNumber) => {
        return selectedNumbers.includes(winningNumber)
    });
    task7El.innerText = matchingNumbers.length;

    const joinedNumbers = winningNumbers.join('');
    const numbersArray = joinedNumbers.split('');
    const sum = numbersArray.reduce((partialResult, number) => {
        return partialResult + +number;
    }, 0);
    task8El.innerText = sum;

    const containsSquare = winningNumbers.some((winningNumber) => {
        const squaredNumber = winningNumber * winningNumber; // Math.pow(number, 2)
        return winningNumbers.includes(squaredNumber)
    })
    task9EL.innerText = containsSquare;
})
