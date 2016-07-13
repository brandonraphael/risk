function placePiece(territories, game, player) {
  var success = false;
  territories.forEach(function(territory, idx, arr) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown) {
      if (notAllTerritoresOwned(arr) && territory.owner === null) {
        territory.updateOwner(player);
        territory.updateInfantry(1);
        success = true;
      } else if (!notAllTerritoresOwned(arr) && territory.owner === game.turn) {
        territory.updateInfantry(1);
        success = true;
      }
    }
  });
  return success;
}

function notAllTerritoresOwned(territories) {
  return territories.reduce(function(prev, curr){
    if (prev) return prev;
    if (curr.owner === null) return true;
  }, false)
}
module.exports = placePiece;
