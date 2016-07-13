function placePiece(territories, game, player) {
  var success = false;
  territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown) {
      territory.updateOwner(player);
      territory.updateInfantry(1);
      success = true;
    }
  });
  return success;
}

module.exports = placePiece;
