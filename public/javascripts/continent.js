function Continent(name, territories, bonusPieces){
  this.name = name;
  this.territories = territories;
  this.bonus = bonusPieces;
}

Continent.prototype.getTerritories = function() {
  return this.territories;
}

module.exports = Continent;
