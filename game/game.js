const Board = require("../board/board");
const Player = require("../player/player.js");
class Game {
  constructor(players, board, turn, isActive, winner, draw) {
    this.players = players;
    this.board = board;
    this.turn = turn;
    this.isActive = isActive;
    this.winner = winner;
    this.draw = draw;
  }
  static newGame(player1Name, player2Name) {
    try {
      if (player1Name === player2Name)
        throw new Error("Enter valid player name...");
      let board = Board.newBoard();
      // console.log(board);
      let turn = 0;
      let player1 = Player.newPlayer(player1Name, "X");
      let player2 = Player.newPlayer(player2Name, "O");

      let players = [player1, player2];

      return new Game(players, board, turn, true, null, false);
    } catch (error) {
      console.log(error);
    }
  }

  play(cellNo) {
    try {
      if (!this.isActive) {
        if (this.winner !== null) {
          console.log(`${this.winner} won the game`);
        }
        console.log(`draw`);
        return;
      }
      this.board.validateCellNo(cellNo);
      this.board.isEmptyCell(cellNo);

      let currPlayer = this.players[this.turn % 2];
      let currSymbol = currPlayer.getPlayerSymbol();
      this.board.markCell(cellNo, currSymbol);

      this.board.displayBoard();
      this.turn++;

      if (this.turn >= 5 && this.board.checkResult()) {
        this.winner = currPlayer.getPlayerName();
        console.log(`${currPlayer.getPlayerName()} is the winner!`);
        return;
      }

      if (this.turn === 9) {
        this.draw = true;
        console.log("GAME TIED!");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Game;
