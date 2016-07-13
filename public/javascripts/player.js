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
  this.ownedContinents = [];
  continents.forEach(function(continent){
    if(this.territories.includes(continent.territories)){
      this.ownedContinents.push(continent);
    }
  });
}

module.exports = Player;
