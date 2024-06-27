const containsForGame = document.querySelector('.contain');
const winMenu = document.querySelector('.winMenu');

function createNewBordForGame(){
    winMenu.style.display = 'none';
    containsForGame.innerHTML = '';
    let idForBlock = 1
    countForGame = 1;

    for(let i = 0; i < 3; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';

        for(let j = 0; j < 3; j++) {
            let newBox = document.createElement('div');
            newBox.className = 'block';
            newBox.id = idForBlock;
            newBox.innerHTML= ' ';
            newRow.appendChild(newBox);
            idForBlock++;
        }
        containsForGame.appendChild(newRow);
    }
}

createNewBordForGame()

var countForGame = 1

containsForGame.addEventListener('click', (event) => {
    if (event.target.closest('.block')) {
        let blockElement = event.target.closest('.block');
        let blockNumber = blockElement.getAttribute('id');

        if (blockElement.innerHTML === ' ') {
            countForGame++;
            if (countForGame % 2 === 0) {
                xPushOnBlock(blockNumber);
            } else {
                oPushOnBlock(blockNumber);
            }
            if(checkwinInGame()){
                setTimeout(() => {
                    let pushOnBoxMessage = document.querySelector('.message');
                    pushOnBoxMessage.innerHTML = `Player "${(countForGame % 2 === 0) ? 'X' : 'O'}" wins!`;
                    winMenu.style.display = 'block';
                }, 100);


            } else if (countForGame > 9) {
                setTimeout(() => {
                    let pushOnBoxMessage = document.querySelector('.message');
                    pushOnBoxMessage.innerHTML = 'It\'s a draw!';
                    winMenu.style.display = 'block';
                    }, 100);

            }
        }
    }
});

function xPushOnBlock(blockId) {
    let pushBlock = document.getElementById(blockId);
    pushBlock.innerHTML= 'X';
    pushBlock.dataset.index = "1"
    pushBlock.style.color = 'blue'
}

function oPushOnBlock(blockId) {
    let pushBlock = document.getElementById(blockId);
    pushBlock.innerHTML= 'O';
    pushBlock.dataset.index = "0"
    pushBlock.style.color = 'red'
}

const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function checkwinInGame() {
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        const blockA = document.getElementById(a.toString());
        const blockB = document.getElementById(b.toString());
        const blockC = document.getElementById(c.toString());

        if (
            blockA.dataset.index &&
            blockA.dataset.index === blockB.dataset.index &&
            blockA.dataset.index === blockC.dataset.index
        ) {
            return true;
        }
    }
    return false;
}

const restartGame = document.getElementById('restart');


restartGame.addEventListener('click', createNewBordForGame)
