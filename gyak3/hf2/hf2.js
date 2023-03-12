/**
 * Task 1: Games
 */
let games = [
    {
        name: 'Elden Ring',
        genre: ['Action', 'RPG'],
        score: 95
    },
    {
        name: 'Dying Light 2',
        genre: ['FPS'],
        score: 76
    },
    {
        name: 'Horizon: Forbidden West',
        genre: ['RPG'],
        score: 88
    },
    {
        name: 'Metal: Hellsinger',
        genre: ['FPS'],
        score: 78
    },
    {
        name: 'Circus Electrique',
        genre: ['Strategy'],
        score: 74
    },
    {
        name: 'Babylon\'s Fall',
        genre: ['RPG'],
        score: 43
    },
    {
        name: 'The Last of Us Part I',
        genre: ['Action', 'Post-Apocalyptic'],
        score: 88
    },
    {
        name: 'The Quarry',
        genre: ['Action', 'Adventure', 'Horror'],
        score: 79
    },
    {
        name: 'Ghostwire: Tokyo',
        genre: ['Action', 'Horror'],
        score: 77
    },
    {
        name: 'Rogue Legacy 2',
        genre: ['Metroidvania', 'Platformer'],
        score: 90
    },
    {
        name: 'Escape Academy',
        genre: ['Adventure', 'Puzzle'],
        score: 81
    },
    {
        name: 'Stray',
        genre: ['Adventure', 'Platformer'],
        score: 84
    }
]

/**
 * Task 1: Array
 */
// 1.1


// 1.2


// 1.3


// 1.4


// 1.5



/**
 * Task 2: Rectangles
 */
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

document.addEventListener('click', (event) => {
    console.log(`Click position: ${event.clientX}, ${event.clientY}`);
});
