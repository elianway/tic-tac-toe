const gameBoard = (function() {
    const board = [1,2,3,4,5,6,7,8,9];
    return {board};
})();

const Player = () => {
    const playerName = () => "";
    const playerSelection = () => [];
    const numberOfWins = () => 0;

    return {playerName, playerSelection, numberOfWins}
};

let player1 = Player();
let player2 = Player();

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
        for (let i = 1; i < winCombs.length; i++) {
            if (player['playerSelection'].includes(winCombs[i])) {
                alert(player.playerName + " wins!");
                player.numberOfWins++;
                resetSelection();
                displayBoard.newGame();
            } else if (displayBoard.allBoxesChecked) {
                alert("Draw!");
                resetSelection();
                displayBoard.newGame();
            } else {
                return;
            };
        }
        if (player.numberOfWins === 3) {
            gameOver(player.playerName);
        } else {
            return;
        };
    };

    let gameOver = (name) => {
        alert(name + " has won! Click to play again!");
        resetScore();
        displayBoard.newGame();
    }

    let resetSelection = () => {
        player1.playerSelection = [];
        player2.playerSelection = [];
    }

    let resetScore = () => {
        player1.numberOfWins = 0;
        player2.numberOfWins = 0;
    };

    return {checkWin};
})();

const displayBoard = (() => {
    let boardGrid = document.querySelector('.board-grid');
    let isPlayerOneTurn = true;

    let blocks = document.querySelectorAll('.board-blocks');

blocks.forEach((e) => {
    e.addEventListener("click", console.log("poop"));
});

    let newBoard = () => {
       for (let i = 0; i < gameBoard.board.length; i++) {
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
                gameCounter.checkWin(player1);
            } else if (e.innerHTML = '') {
                e.innerHTML = 'O';
                cacheSelections();
                gameCounter.checkWin(player2);
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
        for (let i = 1; i <= blocks.length; i++) {
            if (blocks[i].innerHTML === 'X') {
                player1['playerSelection'].push(i);
            } else if (blocks[i].innerHTML === 'O') {
                player2['playerSelection'].push(i);
            }
            else {
                return;
            }
        };
    };

    return {allBoxesChecked, newGame, newBoard, checkBlock};
})();

const startGame = (() => {
    let playerName1 = prompt("Enter Player1 name: ");
    player1.playerName = playerName1;
    let playerName2 = prompt("Enter Player2 name: ");
    player2.playerName = playerName2;
    displayBoard.newBoard();
})();

//blocks is getting init before divs are created
//thus no event listeners
//when moved to make event listeners
//cacheSelections 'blocks[i].innerHTML' is undefined
//clearly something is wrong with treating blocks as
//an array