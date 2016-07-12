function Player(name){
    this.name = name;
    this.territories = [];
}

Player.prototype.addTerritory = function (territory) {
  this.territories.push(territory);
};

Player.prototype.sumInfantry = function(){
  return this.territories.reduce(function(acc, territory){
    return acc + territory.infantry;
  }, 0);
}

module.exports = Player;
