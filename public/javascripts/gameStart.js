// var Player = require('./player');
function gameStart(game) {
  if (placePiece(game.territories, game, game.turn)) {
    console.log(game.turn);
    window.alert(game.turn.name + ' has placed a unit');
    game.turn = game.players[++game.turnIdx % 4];
    game.pieceCounter++;
  }
  if (game.pieceCounter === 40) {
    game.state = 'attack';
  }
}

module.exports = gameStart;
