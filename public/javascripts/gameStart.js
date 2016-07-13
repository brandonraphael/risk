// var Player = require('./player');
function gameStart(game) {
  if (placePiece(game.territories, game, game.turn)) {
    console.log(game.turn);
    window.alert(game.turn.name + ' has placed a unit');
    game.turn = game.players[++game.turnIdx % 4];
    game.pieceCounter++;
  }
  if (game.pieceCounter === 4) {
    game.state = 'placement';
    window.alert('It is now ' + game.turn.name + "'s turn.")

    game.playerInfantry = numNewInfantry(game.turn, game);
  }
}

function numNewInfantry(player, game) {
  return Math.floor((player.territories.length/3) + (player.getBonus(game.continents))) || 1;
}

function placement(game) {
  if (placeNewInfantry(game)) {
    if(game.playerInfantry === 0){
      game.state = 'attack';
    }
  }
}

function placeNewInfantry(game) {
  var success = false;
  game.territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && territory.owner === game.turn) {
      territory.updateInfantry(1);
      game.playerInfantry--;
      window.alert(game.turn.name + ' has ' + game.playerInfantry + ' units left to place')
      console.log(game.turn);
      success = true;
    }
  });
  return success;
}

function attack(game){
  if (game.selectedTerritory !== null && game.selectedEnemy !== null) {
    //Stuff to do rolling and killing and much death
    window.alert('Yayyy killing and stuff')
  } else if (game.selectedTerritory !== null) {
    //Click an adjacent enemy territory
    console.log('out here');
    if (checkForAdjacentEnemy(game)) {
      console.log(game.selectedEnemy);
    }
  } else if (game.selectedTerritory === null) {
    console.log('in here');
    if (checkForOwnedTerritory(game)) {
    //do cool stuff
    console.log(game.selectedTerritory);
    }
  }
}

function checkForOwnedTerritory(game) {
  var success = false;
  game.territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && territory.owner === game.turn) {
      success = true;
      game.selectedTerritory = territory;
    }
  });
  return success;
}

function checkForAdjacentEnemy(game) {
  var success = false;
  game.territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && territory.owner !== game.turn &&       territory.neighbors.indexOf(game.selectedTerritory) !== -1) {
      game.selectedEnemy = territory;
      success = true;
    }
  });
  return success;
}

module.exports = gameStart;
