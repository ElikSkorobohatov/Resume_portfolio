let blockArea = document.querySelector('.block-port.note');
let blockAreaVideo = document.querySelector('.block-port.video');
let blockAreaTikTak = document.querySelector('.block-port.tiktak');

blockArea.style.height = '0';
blockAreaVideo.style.height = '0';
blockAreaTikTak.style.height = '0';

let addButton = document.querySelector('#btn');
let upButton = document.querySelector('#up');
let downButton = document.querySelector('#down');

let nextButton = document.querySelector('#next');
let untilButton = document.querySelector('#until');

let upButtonVideo = document.querySelector('#up-video');
let downButtonVideo = document.querySelector('#down-video');

let upButtonTikTak = document.querySelector('#up-tiktak');
let downButtonTikTak = document.querySelector('#down-tiktak');

let fullScreenBtn = document.querySelector('#fullscreen');

let load = document.querySelector("#loadSite")


hidenBlockButton(nextButton)
hidenBlockButton(untilButton)
hidenBlockButton(addButton)
hidenBlockButton(upButton)
hidenBlockButton(upButtonVideo)
hidenBlockButton(upButtonTikTak)
hidenBlockButton(fullScreenBtn)

function hidenBlockButton(button){
    button.style.height = '0';
    button.style.width = '0';
    button.style.opacity = '0';
}

function showBlockButton(button){
    button.style.height = '70px';
    button.style.width = '70px';
    button.style.opacity = '1';
}

function showBlock(down, up, block,) {
    hidenBlockButton(down)
    showBlockButton(up)
    block.style.height = '600px';
}

function hideBlock(down, up, block, ) {
    showBlockButton(down)
    hidenBlockButton(up)
    block.style.height = '0';
}

function addShowBlock(add, next, until){
    showBlockButton(add)
    showBlockButton(next)
    showBlockButton(until)
}

function addHideBlock(add, next, until){
    hidenBlockButton(add)
    hidenBlockButton(next)
    hidenBlockButton(until)
}

downButton.addEventListener('click', () => {
    showBlock(downButton, upButton, blockArea);
    addShowBlock(addButton, nextButton, untilButton);

    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addHideBlock(addButton, nextButton, untilButton);

    hideBlock(downButtonTikTak, upButtonTikTak, blockAreaTikTak);
});

downButtonVideo.addEventListener('click', () => {
    showBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addShowBlock(addButton, nextButton, untilButton);

    hideBlock(downButton, upButton, blockArea);
    addHideBlock(addButton, nextButton, untilButton);

    hideBlock(downButtonTikTak, upButtonTikTak, blockAreaTikTak);
});

upButton.addEventListener('click', () => {
    hideBlock(downButton, upButton, blockArea);
    addHideBlock(addButton, nextButton, untilButton);
});

upButtonVideo.addEventListener('click', () => {
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addHideBlock(addButton, nextButton, untilButton);
});



downButton.addEventListener('click', (e) => {
    console.log(1)
    showBlock(downButton, upButton, blockArea, addButton);
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addHideBlock(upButtonVideo, nextButton, untilButton)

    hidenBlockButton(fullScreenBtn)

    hideBlock(downButtonTikTak, upButtonTikTak, blockAreaTikTak);

    addShowBlock(addButton);

})

downButtonVideo.addEventListener('click', (e) => {
    showBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addShowBlock(upButtonVideo, nextButton, untilButton);

    hidenBlockButton(fullScreenBtn)

    hideBlock(downButton, upButton, blockArea);

    hideBlock(downButtonTikTak, upButtonTikTak, blockAreaTikTak);

    addHideBlock(addButton)
})


upButton.addEventListener('click', (e) => {
    hideBlock(downButton, upButton, blockArea, addButton);
    addHideBlock(addButton);
})

upButtonVideo.addEventListener('click', (e) => {
    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addHideBlock(upButtonVideo, nextButton, untilButton)
})

upButtonTikTak.addEventListener('click', (e) => {
    hideBlock(downButtonTikTak, upButtonTikTak, blockAreaTikTak);
    hidenBlockButton(fullScreenBtn)
})

downButtonTikTak.addEventListener('click', (e) => {
    showBlock(downButtonTikTak, upButtonTikTak, blockAreaTikTak);
    showBlockButton(fullScreenBtn)

    hideBlock(downButtonVideo, upButtonVideo, blockAreaVideo);
    addHideBlock(upButtonVideo, nextButton, untilButton)

    hideBlock(downButton, upButton, blockArea);
    addHideBlock(addButton);
})

fullScreenBtn.addEventListener('click', (e) =>{
    let fullsreen = document.querySelector('.fullsreen');
    load.classList.remove('active');
    load.style.display = 'none'
    let template = '';
    template += '<div class="TicTacToe">'+
        '<div class = "block-text">'+
            '<h1 class = "text video">Tic Tac Toe</h1>'+
            '<div class = "btn" id="partscreen"><img class="imgscreen" src="icon/partscreen.png"></div>'+
        '</div>'+

        '<div class = "block-port tiktak">'+
            '<iframe id="tiktak" src="tiktak.html" width="100%" height="800px" style="border:none;"></iframe>'+
        '</div>'+
    '</div>'

    fullsreen.innerHTML = template;
    let partScreenBtn = document.querySelector('#partscreen');

    partScreenBtn.addEventListener('click', (e) => {

        template = " "
        fullsreen.innerHTML = template;

        load.classList.add('active');
        load.style.display = 'block'
    })
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
