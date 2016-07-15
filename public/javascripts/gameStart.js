// var Player = require('./player');
function gameStart(game) {
  if (placePiece(game.territories, game, game.turn)) {
    game.turn = game.players[++game.turnIdx % game.numPlayers];
    game.pieceCounter++;
  }
  if (game.pieceCounter === 40) {
    game.state = 'placement';
    window.alert('It is now ' + game.turn.name + "'s turn.")

    game.playerInfantry = numNewInfantry(game.turn, game);
  }
}

function numNewInfantry(player, game) {
  return Math.floor((player.territories.length/2) + (player.getBonus(game.continents))) || 1;
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
      success = true;
    }
  });
  return success;
}

function attack(game){
  if (game.selectedTerritory !== null && game.selectedEnemy !== null) {
    //Stuff to do rolling and killing and much death
    window.alert('Yayyy killing and stuff')
    fight(game);
    elminatePlayer(game);
    declareWinner(game);
  } else if (game.selectedTerritory !== null) {
    checkForAdjacentEnemy(game)
  } else if (game.selectedTerritory === null) {
    checkForOwnedTerritory(game);
  }
}

function checkForOwnedTerritory(game) {
  var success = false;
  game.territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && territory.owner === game.turn && territory.infantry >= 2) {
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

function fight(game) {
  var battle = new Battle();
  var winner = battle.solveBattle(game.selectedTerritory, game.selectedEnemy);
  window.alert(winner.name + ' won the battle!');
  if(game.selectedEnemy.infantry === 0){

    game.selectedEnemy.updateOwner(game.turn);
    game.turn.checkContinents(game.continents);
    game.selectedEnemy.updateInfantry(1);
    game.selectedTerritory.updateInfantry(-1);
    if (game.selectedTerritory.infantry >= 2) {
      var answer = window.prompt('Move more infantry? ('+ (game.selectedTerritory.infantry - 1) + ' or less)');
      if (Number(answer) < game.selectedTerritory.infantry) {
        game.selectedEnemy.updateInfantry(Number(answer))
        game.selectedTerritory.updateInfantry(-Number(answer));
      }
    }
  }
  game.selectedTerritory = null;
  game.selectedEnemy = null;
}

function movement(game) {
  if(game.moveFromTerritory !== null && game.moveToTerritory !== null) {
    // movement
    var answer = window.prompt('Move how many infantry from ' + game.moveFromTerritory.name + ' to ' + game.moveToTerritory.name + ' ? (maximum of '+ (game.moveFromTerritory.infantry - 1) + ')');
    var numTroops = Number(answer);
    if (!isNaN(numTroops) && numTroops >= 0 && numTroops <= game.moveFromTerritory.infantry - 1){
      game.moveToTerritory.updateInfantry(numTroops);
      game.moveFromTerritory.updateInfantry(-numTroops);
      game.state = 'placement';
      var playerIdx = game.players.indexOf(game.turn);
      game.turn = game.players[++playerIdx % game.numPlayers];
      game.playerInfantry = numNewInfantry(game.turn, game);
      game.moveToTerritory = null;
      game.moveFromTerritory = null;
    }
  } else if (game.moveFromTerritory !== null) {
    if (checkForAdjacentOwnedTerritory(game)) {
    }
  } else if (game.moveFromTerritory === null) {
    if (checkForOwnedTerritory(game)) {
      game.moveFromTerritory = game.selectedTerritory;
      game.selectedTerritory = null;
    }
  }
}

function checkForAdjacentOwnedTerritory(game) {
  var success = false;
  game.territories.forEach(function(territory) {
    if (territory.phaserObj.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && territory.owner === game.turn && territory.neighbors.indexOf(game.moveFromTerritory) !== -1) {
      game.moveToTerritory = territory;
      success = true;
    }
  });
  return success;
}

function elminatePlayer(game) {
  game.players.forEach(function(player, idx, players) {
    if (player.territories.length === 0) {
      players.splice(idx, 1);
      window.alert('A player has been eliminated!');
    }
  });
  game.numPlayers = game.players.length;
}

function declareWinner(game) {
 if (game.players.length === 1) {
   window.alert(game.players[0].name  + ' is the winner!!!!!!!!!1!')
 }
}
