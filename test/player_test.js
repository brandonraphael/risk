var expect = require('chai').expect;
var Territory = require('../public/javascripts/territory');
var Player = require('../public/javascripts/player');

describe('Player', function(){
  it('should be keep track of owned territories', function(){
      var rosarita = new Player('Rosarita');
      var territory = new Territory('RosaritaVille');

      rosarita.addTerritory(territory);

      expect(rosarita.territories[0]).to.deep.equal(territory);
  });
  it('should be able to keep track of multiple territories', function() {
    var bob = new Player('Bob');
    var territory = new Territory('somewhere');
    var otherTerritory = new Territory('somewhere else');

    bob.addTerritory(territory);
    bob.addTerritory(otherTerritory);
    expect(bob.territories).to.deep.equal([territory, otherTerritory]);
  });

  it('should be able to sum up all infantry on owned territories', function(){
      var rosarita = new Player('Rosarita');
      var territory = new Territory('RosaritaVille');
      rosarita.addTerritory(territory);
      territory.updateInfantry(16);
      console.log("infantry: ", rosarita.sumInfantry());
      expect(rosarita.sumInfantry()).to.equal(16);
  });
  it('should be able to sum up all infantry on multiple territories', function() {
    var rosarita = new Player('Rosarita');
    var territory = new Territory('RosaritaVille');
    var otherPlace = new Territory('blah');
    rosarita.addTerritory(territory);
    rosarita.addTerritory(otherPlace);
    territory.updateInfantry(16);
    otherPlace.updateInfantry(2);
    expect(rosarita.sumInfantry()).to.equal(18);
  });
});
