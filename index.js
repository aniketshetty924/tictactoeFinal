const Game = require("./game/game.js");
let g1 = Game.newGame("aniket", "aneesh");
console.log(JSON.stringify(g1, null, 2));

g1.play(0);
g1.play(3);
g1.play(1);
g1.play(8);
g1.play(2);
console.log(JSON.stringify(g1, null, 2));
g1.play(5);
