class Cell {
  #symbol;
  constructor(symbol) {
    this.#symbol = symbol;
  }
  //getter
  getSymbol() {
    return this.#symbol;
  }
  static newCell() {
    return new Cell(" ");
  }

  isEmptyCell() {
    return this.#symbol === " ";
  }

  mark(symbol) {
    this.#symbol = symbol;
  }
}

module.exports = Cell;
