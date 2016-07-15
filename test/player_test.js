var expect = require('chai').expect;
var Territory = require('../public/javascripts/territory');
var Player = require('../public/javascripts/player');
var Continent = require('../public/javascripts/continent');

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
  it('should be able to get their total bonus infantry units', function() {
    var rosarita = new Player('Rosarita');
    var goodyearTerritory = new Territory('goodyear')
    var avondaleTerritory = new Territory('avondale')
    var parkTerritory = new Territory('park')
    rosarita.addTerritory(goodyearTerritory);
    rosarita.addTerritory(avondaleTerritory);
    rosarita.addTerritory(parkTerritory);

    var westValley = new Continent('West Valley', [goodyearTerritory, avondaleTerritory, parkTerritory], 3);
    expect(rosarita.getBonus([westValley])).to.equal(3);
  });
  it('should be able to get their total bonus infantry units', function() {
    var rosarita = new Player('Rosarita');
    var goodyearTerritory = new Territory('goodyear')
    var avondaleTerritory = new Territory('avondale')
    var parkTerritory = new Territory('park')
    var glendaleTerritory = new Territory('park')
    var peoriaTerritory = new Territory('park')
    var youngtownTerritory = new Territory('park')
    var sunCityTerritory = new Territory('park')

    rosarita.addTerritory(goodyearTerritory);
    rosarita.addTerritory(avondaleTerritory);
    rosarita.addTerritory(parkTerritory);
    rosarita.addTerritory(glendaleTerritory);
    rosarita.addTerritory(peoriaTerritory);
    rosarita.addTerritory(youngtownTerritory);
    rosarita.addTerritory(sunCityTerritory);

    var northWestValley = new Continent('North West Valley', [glendaleTerritory, peoriaTerritory, youngtownTerritory, sunCityTerritory], 4);
    var westValley = new Continent('West Valley', [goodyearTerritory, avondaleTerritory, parkTerritory], 3);
    expect(rosarita.getBonus([westValley, northWestValley])).to.equal(7);
  });
  it('should be able to remove a territory', function() {
    var rosarita = new Player('Rosarita');
    var goodyearTerritory = new Territory('goodyear')
    var avondaleTerritory = new Territory('avondale')
    var parkTerritory = new Territory('park')
    rosarita.addTerritory(goodyearTerritory);
    rosarita.addTerritory(avondaleTerritory);
    rosarita.addTerritory(parkTerritory);
    rosarita.removeTerritory(avondaleTerritory);
    expect(rosarita.territories).to.deep.equal([goodyearTerritory, parkTerritory])
  });
  it('should be able to remove multiple territory', function() {
    var rosarita = new Player('Rosarita');
    var goodyearTerritory = new Territory('goodyear')
    var avondaleTerritory = new Territory('avondale')
    var parkTerritory = new Territory('park')
    rosarita.addTerritory(goodyearTerritory);
    rosarita.addTerritory(avondaleTerritory);
    rosarita.addTerritory(parkTerritory);
    rosarita.removeTerritory(avondaleTerritory);
    rosarita.removeTerritory(goodyearTerritory);

    expect(rosarita.territories).to.deep.equal([parkTerritory])
  });});
