var expect = require('chai').expect;
var Territory = require('../public/javascripts/territory');
var Player = require('../public/javascripts/player');

describe('Player', function(){
  it('should be keep track of owned territories', function(){
      var rosarita = new Player('Rosarita');
      var territory = new Territory('RosaritaVille');

      territory.updateOwner(rosarita);

      expect(rosarita.territories[0]).to.deep.equal(territory);
  });

  it('should be able to sum up all infantry on owned territories', function(){
      var rosarita = new Player('Rosarita');
      var territory = new Territory('RosaritaVille');
      territory.updateOwner(rosarita);
      territory.updateInfantry(16);
      console.log("infantry: ", rosarita.sumInfantry());
      expect(rosarita.sumInfantry()).to.equal(16);
  });
});
