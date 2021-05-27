const gameBoard = (function() {
    const board = {array:[1,2,3,4,5,6,7,8,9]};
    return {board};
})();


const Player = (name) => {
    const playerName = () => name;
    const playerScore = () => 0;
    const playerSelection = () => [];

    return {playerName, playerScore, playerSelection}
};

//GAME MODULE
const gameCounter = (() => {
    let winCombs = [[1,2,3],
                    [1,4,7],
                    [1,5,9],
                    [2,5,8],
                    [3,6,9],
                    [3,5,7],
                    [4,5,6],
                    [7,8,9]
];

    let checkWin = (playerSelection, winCombs) => {
        //check if playerSelection is in winCombs!
        //check for draw! -- if certain number boxes left
        //and no win?..
    };

    let resetGame = () => {

    };
    return {checkWin};
})();


//DISPLAY MODULE
const displayBoard = (() => {
    let boardGrid = document.createElement('div');
    boardGrid.setAttribute('class', 'board-grid');
    let isPlayerOneTurn = true;
    let boxMarker = '';

    let blocks = boardGrid.getElementsByClassName('board-blocks');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('click', checkBlock());
    };

    let newBoard = () => {
       for (let c in board) {
           let newDiv = document.createElement('div');
           newDiv.className = 'board-blocks';
           boardGrid.appendChild(newDiv);
       };
    };

    let newGame = () => {
        removeBoard();
        newBoard();
    };

    let removeBoard = () => {
        for (let i = 0; i < blocks.length; i++) {
            blocks.parentNode.firstChild.removeChild();
        }
    };

    let checkBlock = (e) => {
        if (isPlayerOneTurn) {
            boxMarker = 'X';
        } else {
            boxMarker = 'O';
        };
        if (e.innerHTML === '') {
        e.innerHTML = boxMarker;
        };
        cacheSelections();
        checkWin();
    };

    let cacheSelections = () => {
        for (let c in blocks) {
            if (blocks[i].innerHTML === 'X') {
                player1.playerSelection.push(i);
            } else if (blocks[i].innerHTML === 'O') {
                player2.playerSelection.push(i);
            };
        };
    };
})();




