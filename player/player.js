class Player {
  //playerName,symbol
  #symbol;
  #playerName;
  constructor(playerName, symbol) {
    this.#playerName = playerName;
    this.#symbol = symbol;
  }

  //getters
  getPlayerSymbol() {
    return this.#symbol;
  }
  getPlayerName() {
    return this.#playerName;
  }
  static newPlayer(playerName, symbol) {
    try {
      if (typeof playerName != "string")
        throw new Error("Enter a valid player name");
      //   if (symbol !== "X" || symbol !== "O")
      //     throw new Error("Enter a valid symbol!");

      return new Player(playerName, symbol);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Player;
