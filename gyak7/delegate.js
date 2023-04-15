const drawEl = document.getElementById('draw');
const newEl = document.getElementById('new');
const selectEl = document.getElementById('game');
const tableEl = document.querySelector('table');
const task6El = document.getElementById('task6');
const task7El = document.getElementById('task7');
const task8El = document.getElementById('task8');
const task9EL = document.getElementById('task9');
const tasksEl = document.getElementById('tasks');

selectedNumbers = [];

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


