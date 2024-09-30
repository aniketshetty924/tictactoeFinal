const Cell = require("../cells/cells.js");
class Board {
  //cells[9]

  constructor(cells) {
    this.cells = cells;
  }
  static newBoard() {
    let cells = [];
    for (let i = 0; i < 9; i++) {
      cells.push(Cell.newCell());
    }
    return new Board(cells);
  }

  validateCellNo(cellNo) {
    try {
      if (typeof cellNo != "number") throw new Error("invalid cell no type!");
      if (cellNo < 0 || cellNo > 8) throw new Error("invalid cell no...");
    } catch (error) {
      throw error;
    }
  }

  isEmptyCell(cellNo) {
    this.cells[cellNo].isEmptyCell();
  }

  markCell(cellNo, symbol) {
    try {
      this.cells[cellNo].mark(symbol);
    } catch (error) {
      throw error;
    }
  }

  displayBoard() {
    console.log(`
         ${this.cells[0].getSymbol() || " "} | ${
      this.cells[1].getSymbol() || " "
    } | ${this.cells[2].getSymbol() || " "}
        -----------
         ${this.cells[3].getSymbol() || " "} | ${
      this.cells[4].getSymbol() || " "
    } | ${this.cells[5].getSymbol() || " "}
        -----------
         ${this.cells[6].getSymbol() || " "} | ${
      this.cells[7].getSymbol() || " "
    } | ${this.cells[8].getSymbol() || " "}
        `);
  }
  checkResult() {
    try {
      const winPatterns = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6,
      ];

      for (let i = 0; i < winPatterns.length; i += 3) {
        const a = winPatterns[i];
        const b = winPatterns[i + 1];
        const c = winPatterns[i + 2];

        if (
          this.cells[a].getSymbol() !== " " &&
          this.cells[a].getSymbol() === this.cells[b].getSymbol() &&
          this.cells[a].getSymbol() === this.cells[c].getSymbol()
        ) {
          return true;
        }
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Board;
