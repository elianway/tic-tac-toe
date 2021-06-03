"use strict"

const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return {getSign}
};

const gameBoard = (() => {
  const board = ["","","","","","","","",""];

  const getField = (index) => {
    if (index > board.length) return;
    return board[index];
  };

  const setField = (index, sign) => {
    if (index > board.length) return;
    board[index] = sign;
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
    };
  };

  return {getField, setField, reset};
})();

