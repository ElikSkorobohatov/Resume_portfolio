let blockArea = document.querySelector('.block-port.note');
let blockAreaVideo = document.querySelector('.block-port.video');
blockArea.style.height = '0';
blockAreaVideo.style.height = '0';

let addButton = document.querySelector('#btn');
let upButton = document.querySelector('#up');
let downButton = document.querySelector('#down');

let nextButton = document.querySelector('#next');
let untilButton = document.querySelector('#until');

let upButtonVideo = document.querySelector('#up-video');
let downButtonVideo = document.querySelector('#down-video');

nextButton.style.height = '0';
nextButton.style.width = '0';
nextButton.style.opacity = '0';

untilButton.style.height = '0';
untilButton.style.width = '0';
untilButton.style.opacity = '0';

addButton.style.height = '0';
addButton.style.width = '0';
addButton.style.opacity = '0';

upButton.style.height = '0';
upButton.style.width = '0';
upButton.style.opacity = '0';

upButtonVideo.style.height = '0';
upButtonVideo.style.width = '0';
upButtonVideo.style.opacity = '0';


function showBlock(down, up, block, add, next, until) {
    down.style.height = '0';
    down.style.width = '0';
    down.style.opacity = '0';

    up.style.height = '70px';
    up.style.width = '70px';
    up.style.opacity = '1';

    block.style.height = '600px';

    add.style.height = '70px';
    add.style.width = '70px';
    add.style.opacity = '1';

    next.style.height = '70px';
    next.style.width = '70px';
    next.style.opacity = '1';

    until.style.height = '70px';
    until.style.width = '70px';
    until.style.opacity = '1';
}

function hideBlock(down, up, block, add, next, until) {
    down.style.height = '70px';
    down.style.width = '70px';
    down.style.opacity = '1';

    up.style.height = '0';
    up.style.width = '0';
    up.style.opacity = '0';

    block.style.height = '0';

    add.style.height = '0';
    add.style.width = '0';
    add.style.opacity = '0';

    next.style.height = '0';
    next.style.width = '0';
    next.style.opacity = '0';

    until.style.height = '0';
    until.style.width = '0';
    until.style.opacity = '0';
}

downButton.addEventListener('click', () => {
    showBlock(downButton, upButton, blockArea, addButton, nextButton, untilButton);
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo, addButton, nextButton, untilButton);
});

downButtonVideo.addEventListener('click', () => {
    showBlock(downButtonVideo, upButtonVideo, blockAreaVideo, addButton, nextButton, untilButton);
    hideBlock(downButton, upButton, blockArea, addButton, nextButton, untilButton);
});

upButton.addEventListener('click', () => {
    hideBlock(downButton, upButton, blockArea, addButton, nextButton, untilButton);
});

upButtonVideo.addEventListener('click', () => {
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo, addButton, nextButton, untilButton);
});



downButton.addEventListener('click', (e) => {
    console.log(downButton, upButton, blockArea, addButton, nextButton, untilButton, upButtonVideo, downButtonVideo);

    showBlock(downButton, upButton, blockArea, addButton);
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo, upButtonVideo, nextButton, untilButton);
})

downButtonVideo.addEventListener('click', (e) => {
    showBlock(downButtonVideo, upButtonVideo, blockAreaVideo, upButtonVideo, nextButton, untilButton);
    hideBlock(downButton, upButton, blockArea, addButton);
})


upButton.addEventListener('click', (e) => {
    hideBlock(downButton, upButton, blockArea, addButton);
})

upButtonVideo.addEventListener('click', (e) => {
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo, upButtonVideo, nextButton, untilButton);
})




const $area = document.querySelector('.block-port');
const $addBtn = document.querySelector('#btn');

let action = false;
let $selectedNote = null;
let selectedNoteIndex = null;
let notes = [];

const areaWidth = $area.offsetWidth;
const areaHeight = $area.offsetHeight;
let noteWidth = 0;
let noteHeight = 0;

let startCoords = {
    x: 0,
    y: 0
}
let distance = {
    x: 0,
    y: 0
}

if (!!getLS('notes')) {
    notes = getLS('notes');
    noteGenerator(notes);
}

function setLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

function noteGenerator(list) {
    let template = '';
    for (let i = 0; i < list.length; i++) {
        template += '<div class="area" style="left: ' + list[i].x + 'px; top: ' + list[i].y + 'px;" data-index="' + i + '">' +
            '<div class="up">' +
            '<h3>Title</h3>' +
            '<a class="close" data-index="' + i + '">X</a>' +
            '</div>' +
            '<div class="general">' +
            '<textarea class="enter-text">' + list[i].text + '</textarea>' +
            '</div>'+
            '</div>';
    }
    $area.innerHTML = template;

    setTimeout(() => {
        noteWidth = document.querySelector('.area').offsetWidth;
        noteHeight = document.querySelector('.area').offsetHeight;

        document.querySelectorAll('.enter-text').forEach((textarea, index) => {
            textarea.addEventListener('input', function () {
                notes[index].text = textarea.value;
                setLS('notes', notes);
            });
        });

        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', function () {
                const index = closeBtn.getAttribute('data-index');
                notes.splice(index, 1);
                setLS('notes', notes);
                noteGenerator(notes);
            });
        });
    }, 0);
}

function noteController(x, y) {
    $selectedNote.style.left = x + 'px';
    $selectedNote.style.top = y + 'px';
}

$area.addEventListener('mousedown', function (e) {
    let target = e.target;

    if (!target.classList.contains('block')) {
        target = target.closest('.area');
    }

    if (target && target.classList.contains('area')) {
        action = true;
        $selectedNote = target;
        selectedNoteIndex = $selectedNote.getAttribute('data-index');
        startCoords.x = e.pageX;
        startCoords.y = e.pageY;
    }
});

$area.addEventListener('mouseup', function (e) {
    action = false;
    notes[selectedNoteIndex].x = distance.x;
    notes[selectedNoteIndex].y = distance.y;
    setLS('notes', notes);
});

$area.addEventListener('mousemove', function (e) {
    if (action) {
        distance.x = notes[selectedNoteIndex].x + (e.pageX - startCoords.x);
        distance.y = notes[selectedNoteIndex].y + (e.pageY - startCoords.y);

        if (distance.x <= 0) distance.x = 0;
        if (distance.x >= (areaWidth - noteWidth)) distance.x = areaWidth - noteWidth;

        if (distance.y <= 0) distance.y = 0;
        if (distance.y >= (areaHeight - noteHeight)) distance.y = areaHeight - noteHeight;

        noteController(distance.x, distance.y);
    }
});

$addBtn.addEventListener('click', function () {
    notes.push({
        x: 0,
        y: 0,
        text: ''
    });
    noteGenerator(notes);
    setLS('notes', notes);
});
