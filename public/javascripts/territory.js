// var territory = "territory";

function Territory(name, phaserObj){
  this.name = name;
  this.neighbors = [];
  this.phaserObj = phaserObj;
  this.owner = null;
  this.infantry = 0;
}

Territory.prototype.updateOwner = function (owner) {
  this.owner = owner;
  if (owner.territories.indexOf(this) === -1) {
    this.owner.addTerritory(this);
  }
};

Territory.prototype.updateInfantry = function (infantry) {
  this.infantry += infantry;
  if(this.infantry < 0) this.infantry = 0;
};

Territory.prototype.setNeighbors = function( neighbors ){
  this.neighbors = neighbors;
}

module.exports = Territory;
