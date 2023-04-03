class Bird {
    image;
    constructor(context, x, y, width, height, velocity, acceleration) {
        this.context = context
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.image = new Image();
        this.image.src = './assets/bird.png';
    }

    draw() {
        // context.fillStyle = 'gray';
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(dt) {
        this.velocity += this.acceleration * dt / 1000;
        this.y += this.velocity * dt / 1000;
    }
}

class Column {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        context.fillStyle = 'green';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(dt) {
        this.x -= 125 * dt / 1000
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        bird.velocity -= 100;
    }
});

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

const bird = new Bird(context, 50, 200, 50, 50, 10, 100);
const columns = [];

const columnGap = 200;
const columnDistance = 250;

function createColumns() {
    const topColumnHeight = random(75, 150);
    columns.push(...[
        new Column(context, canvas.width, 0, 40, topColumnHeight),
        new Column(context, canvas.width, topColumnHeight + columnGap, 40, canvas.height - topColumnHeight- columnGap)
    ]);
}

createColumns();

let previousTime = performance.now();
function cycle(now = performance.now()) {
    const dt = now - previousTime;
    previousTime = now;

    update(dt);
    draw();

    requestAnimationFrame(cycle);
}

function draw() {
    context.fillStyle = 'aqua';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // context.clearRect(100, 100, 50, 50);

    // context.beginPath();
    // context.moveTo(200, 200);
    // context.lineTo(225, 250);
    // context.lineTo(250, 200);
    // context.lineTo(200, 200);
    // context.closePath();
    // context.stroke();

    bird.draw();

    columns.forEach((column) => {
        column.draw();
    })
}

function update(dt) {
    bird.update(dt);

    columns.forEach((column) => {
        column.update(dt);
    })

    if (columns[columns.length - 1].x <= canvas.width - columnDistance) {
        createColumns();
    }

    // @todo Remove old columns
}

cycle();

