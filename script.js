const gameBoard = (function() {
    const board = {array:[1,2,3,4,5,6,7,8,9]};
    return {board};
})();


const Player = () => {
    const playerName = () => "";
    const playerSelection = () => [];
    const numberOfWins = () => 0;

    return {playerName, playerSelection, numberOfWins}
};

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

    let checkWin = (player) => {
        for (let c in winCombs) {
            if (player.playerSelection.includes(winCombs[c])) {
                alert(player.playerName + " wins!");
                player.numberOfWins++;
                resetSelection();
                newGame();
            } else if (allBoxesChecked) {
                alert("Draw!");
                resetSelection();
                newGame();
            }
        }
        if (player.numberOfWins === 3) {
            gameOver(player.playerName);
        }
    };

    let gameOver = (name) => {
        alert(name + " has won! Click to play again!");
        resetScore();
        newGame();
    }

    let resetSelection = () => {
        player1.playerSelection = [];
        player2.playerSelection = [];
    }

    let resetScore = () => {
        player1.numberOfWins = 0;
        player2.numberOfWins = 0;
    };

    let makePlayers = () => {
        let playerName1 = prompt("Enter Player1 name: ");
        player1.playerName = playerName1;
        let playerName2 = prompt("Enter Player2 name: ");
        player2.playerName = playerName2;
    }

    return {checkWin};
})();

const displayBoard = (() => {
    let boardGrid = document.createElement('div');
    boardGrid.setAttribute('class', 'board-grid');
    let isPlayerOneTurn = true;

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
        if (e.innerHTML === '' && isPlayerOneTurn) {
                e.innerHTML = 'X';
                cacheSelections();
                checkWin(player1);
            } else if (e.innerHTML = '') {
                e.innerHTML = 'O';
                cacheSelections();
                checkWin(player2);
        };
    };

    let allBoxesChecked = () => {
        result = true;
        for (c in blocks) {
            if (blocks[c].innerHTML === "") {
                result = false;
            }
        }
        return result;
    };

    let cacheSelections = () => {
        for (let c in blocks) {
            if (blocks[c].innerHTML === 'X') {
                player1.playerSelection.push(c);
            } else if (blocks[c].innerHTML === 'O') {
                player2.playerSelection.push(c);
            };
        };
    };
})();

//initialize on window load makePlayers
//and finish scoping modules for compatibility


