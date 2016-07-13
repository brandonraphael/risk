// var Player = require('./player');
function gameStart(game) {
  if (placePiece(game.territories, game, game.turn)) {
    console.log(game.turn);
    window.alert(game.turn.name + ' has placed a unit');
    game.turn = game.players[++game.turnIdx % 4];
    game.pieceCounter++;
  }
  if (game.pieceCounter === 4) {
    game.state = 'placement';
    window.alert('It is now ' + game.turn.name + "'s turn.")

    game.playerInfantry = numNewInfantry(game.turn);
  }
}

function numNewInfantry(player) {
  return Math.floor(player.territories.length/3) || 1;
}

function placement(game) {
  if (placeNewInfantry(game)) {
    if(game.playerInfantry === 0){
      game.state = 'attack';
    }
  }
}

function placeNewInfantry(game) {
  var success = false;
  game.territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && territory.owner === game.turn) {
      territory.updateInfantry(1);
      game.playerInfantry--;
      window.alert(game.turn.name + ' has ' + game.playerInfantry + ' units left to place')
      success = true;
    }
  });
  return success;
}
module.exports = gameStart;
