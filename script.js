const gameBoard = (function() {
    let board = {array:[]};
    //loop to add 9 div blocks to array
    //calls createBoard
    return {board};
})();


const Player = (name) => {
    const playerName = () => name;

    return {playerName}
};

//GAME MODULE
//gamecounter object
//store possible win combinations in arrays in an object
//checkWin checks for win / draw
//resetGame


//displayController module
//newBoard creates a grid of divs from board array
//checkBoard checks a block on the board
//updateBoard updates board on display
