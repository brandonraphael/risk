function polygonMouseCheck(territories, game) {
  territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y))
    return territory;
  });
}

module.exports = polygonMouseCheck;
