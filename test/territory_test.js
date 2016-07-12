var expect = require('chai').expect;
var Territory = require('../public/javascripts/territory');
var Player = require('../public/javascripts/player');


describe('territory', function(){
  var name = 'East Valley';
  var neighbors = [new Territory('West Valley'), new Territory('Scottsdale')];
  var owner = new Player();
  //can't directly use a Phaser obj here
  var phaserObj = new Object();

  it('has a name', function(){
    var territory = new Territory(name);
    expect(territory.name).to.equal(name);
  });
  it('can add an owner with the updateOwner method', function(){
    var territory = new Territory(name, neighbors);
    territory.updateOwner(owner);
    expect(territory.owner).to.be.an.instanceof(Player);
  });
  it('should be able to set neighbors with the setNeighbors method', function() {
    var territory = new Territory('Testaria');
    var otherTerritory = new Territory('Something Elseland');
    territory.setNeighbors([otherTerritory]);
    expect(territory.neighbors).to.deep.equal([otherTerritory]);
  });
  it('should be able to set neighbors with the setNeighbors method', function() {
    var territory = new Territory('Testaria');
    var otherTerritory = new Territory('Something Elseland');
    var otherOtherTerritory = new Territory('Farawayland');

    territory.setNeighbors([otherTerritory, otherOtherTerritory]);
    expect(territory.neighbors).to.deep.equal([otherTerritory, otherOtherTerritory]);
  });

  it('adds infantry to the territory', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.infantry).to.equal(0);
    territory.updateInfantry(3);
    expect(territory.infantry).to.equal(3);
  });

  it('subtracts infantry from the territory', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.infantry).to.equal(0);
    territory.updateInfantry(5);
    territory.updateInfantry(-3);
    expect(territory.infantry).to.equal(2);
  });

  it('does not allow infantry numbers to go below zero', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.infantry).to.equal(0);
    territory.updateInfantry(3);
    territory.updateInfantry(-4);
    expect(territory.infantry).to.equal(0);
  });
});
