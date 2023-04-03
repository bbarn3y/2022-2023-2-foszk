/**
 * Task 1: Array
 */
let games = [
    {
        name: 'Elden Ring',
        genre: 'RPG',
        score: 95
    },
    {
        name: 'Dying Light 2',
        genre: 'FPS',
        score: 76
    },
    {
        name: 'Nightmare Reaper',
        genre: 'FPS',
        score: 81
    },
    {
        name: 'Horizon: Forbidden West',
        genre: 'RPG',
        score: 88
    },
    {
        name: 'Metal: Hellsinger',
        genre: 'FPS',
        score: 78
    },
    {
        name: 'Circus Electrique',
        genre: 'Strategy',
        score: 74
    },
    {
        name: 'Babylon\'s Fall',
        genre: 'RPG',
        score: 43
    },
    {
        name: 'The Last of Us Part I',
        genre: 'Action',
        score: 88
    },
    {
        name: 'The Quarry',
        genre: 'Adventure',
        score: 79
    },
    {
        name: 'Ghostwire: Tokyo',
        genre: 'Action',
        score: 77
    },
    {
        name: 'Syberia: The World Before',
        genre: 'Adventure',
        score: 81
    },
    {
        name: 'Cuphead: The Delicious Last Course',
        genre: 'Platformer',
        score: 88
    },
    {
        name: 'Rogue Legacy 2',
        genre: 'Metroidvania',
        score: 90
    },
    {
        name: 'Escape Academy',
        genre: 'Puzzle',
        score: 81
    },
    {
        name: 'NORCO',
        genre: 'Adventure',
        score: 90
    },
    {
        name: 'Pokémon Legends: Arceus',
        genre: 'RPG',
        score: 84
    },
    {
        name: 'Stray',
        genre: 'Platformer',
        score: 84
    }
]


// 1.1


// 1.2


// 1.3


// 1.4


// 1.5





/**
 * Task 2: Light switch
 */
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}



