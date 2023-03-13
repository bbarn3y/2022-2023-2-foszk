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


