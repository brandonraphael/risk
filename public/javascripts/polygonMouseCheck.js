function polygonMouseCheck(territories, game, graphics) {
  var hovered;
  territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y)) {
      hovered = territory;
    }
  });
  return hovered;
}

module.exports = polygonMouseCheck;
