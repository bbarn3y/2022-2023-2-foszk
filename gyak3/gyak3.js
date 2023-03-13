const colorMeEl = document.querySelector('#colorMe');
const changeColorEl = document.getElementById('coloringButton');

const colors = ['blue', 'green', 'red', 'black'];
changeColorEl.addEventListener('click', (event) => {
    console.log('event', event, colorMeEl.style.color);
    const currentColorIndex = colors
        .findIndex((color) => color === colorMeEl.style.color);
    const newColor = (currentColorIndex === -1 || currentColorIndex + 1 >= colors.length)
        ? colors[0]
        : colors[currentColorIndex + 1];
    colorMeEl.style.color = newColor;
});

// Propagation
const outerRectangleEl = document.getElementById('outerRectangle');
const innerRectangleEl = document.querySelector('#innerRectangle');

outerRectangleEl.addEventListener('click', (event) => {
    console.log('green');
    event.stopPropagation();
});
innerRectangleEl.addEventListener('click', (event) => {
    console.log('red');
    event.stopPropagation();
})

document.addEventListener('click', (event) => {
    console.log('document clicked');
});


// Default
const checkboxEl = document.querySelector('#checkbox');
const allowCheckingEl = document.querySelector('#allowChecking');

checkboxEl.addEventListener('click', (event) => {
    console.log(allowCheckingEl.value);
    if (allowCheckingEl.value === 'no') {
        console.log('prevent default');
        event.preventDefault();
    }
});



// Table
const tableSizeEl = document.querySelector('#tableSize');
const tableResultEl = document.querySelector('.tableResult > table');

tableSizeEl.addEventListener('input', (event) => {
    let newTableSize = +tableSizeEl.value;
    if (newTableSize > 100) {
        tableSizeEl.value = 100;
        newTableSize = 100;
    }
    console.log('newTableSize', newTableSize);

    tableResultEl.innerHTML = '';

    for (let rowIndex = 1; rowIndex <= newTableSize; rowIndex++) {
        const row = document.createElement('tr');
        for (let columnIndex = 1; columnIndex <= newTableSize; columnIndex++) {
            const column = document.createElement('td');
            column.innerText = `${rowIndex * columnIndex}`;
            row.appendChild(column);
        }
        tableResultEl.appendChild(row);
    }

})

