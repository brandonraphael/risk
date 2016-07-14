function Player(name){
    this.name = name;
    this.territories = [];
    this.ownedContinents = [];
}

Player.prototype.addTerritory = function (territory) {
  this.territories.push(territory);
};

Player.prototype.sumInfantry = function(){
  return this.territories.reduce(function(acc, territory){
    return acc + territory.infantry;
  }, 0);
}

Player.prototype.checkContinents = function(continents){
  var self = this;
  this.ownedContinents = continents.filter(function(continent) {
    return continent.territories.reduce(function(acc, territory) {
      if (!acc) return acc;
      if (self.territories.indexOf(territory) === -1) return false;
      return acc;
    }, true)
  });
}


Player.prototype.getBonus = function(continents) {
  this.checkContinents(continents);
  return this.ownedContinents.reduce(function(acc, continent){
    return acc + continent.bonus;
  }, 0)
}


Player.prototype.removeTerritory = function(territory) {
  var newTerritories = this.territories.filter(function(singleTerritory) {
    return territory !== singleTerritory
  });
  this.territories = newTerritories;
}
module.exports = Player;
