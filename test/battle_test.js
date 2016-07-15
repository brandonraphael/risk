var expect = require('chai').expect;

var Battle = require('../public/javascripts/battle');
var Territory = require('../public/javascripts/territory');
var Player = require('../public/javascripts/player');

describe('Battle', function(){
  it('determines the winner of a battle', function(){
      var east = new Territory('East');
      east.updateInfantry(4);
      east.updateOwner(new Player("Bob"));
      var west = new Territory('West');
      west.updateOwner(new Player("Joe"));
      west.updateInfantry(3);
      var battle = new Battle();
      var result = battle.solveBattle(east, west);
      console.log("winner: ", result);
  });
  it('should determine who has the higher rolls with one dice', function() {
    var battle = new Battle();
    expect(battle.compareRolls([3], [4], 'bob', 'jo')).to.deep.equal({attacker: -1, defender: 0, winner: 'jo'});
  });
  it('should determine who has the higher rolls with two dice', function() {
    var battle = new Battle();
    expect(battle.compareRolls([5,3], [2,4], 'bob', 'jo')).to.deep.equal({attacker: -1, defender: -1, winner: 'tie'});
  });
  it('should determine who has the higher rolls with attacker having 3 dice', function() {
    var battle = new Battle();
    expect(battle.compareRolls([6,4,3], [6,4], 'bob', 'jo')).to.deep.equal({attacker: -2, defender: 0, winner: 'jo'});
  });
  it('should determine who has the higher rolls attacker winning', function() {
    var battle = new Battle();
    expect(battle.compareRolls([6,4,3], [5,2], 'bob', 'jo')).to.deep.equal({attacker: 0, defender: -2, winner: 'bob'});
  });
});
