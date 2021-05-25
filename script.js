const gameBoard = (function() {
    let board = {array:[1,2,3,4,5,6,7,8,9]};
    return {board};
})();


const Player = (name) => {
    const playerName = () => name;
    const playerScore = 0;
    const playerSelection = [];

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
        //check for draw!
    };

    let resetGame = () => {

    };
    return {checkWin};
})();


//DISPLAY MODULE
//newBoard creates a grid of divs from board array
//updateBoard updates board on display
//checkBlock checks a div on click
//isChecked checks to see if block is checked  *?




