// var DiceEmulator = require('./dice_emulator');

function Battle(){
  this.diceEmulator = new DiceEmulator();

}

Battle.prototype.solveBattle = function(attacker, defender){
  var attackerRoll;
  var defenderRoll;
  if(attacker.infantry > 1){
    attackerRoll = this.getAttackerRoll(attacker.infantry);

    defenderRoll = this.getDefenderRoll(defender.infantry);
    //compare results
    var result = this.compareRolls(attackerRoll,defenderRoll,attacker.owner,defender.owner);
    //update
    attacker.updateInfantry(result.attacker);
    defender.updateInfantry(result.defender);
    return result.winner;
  }
  return;
}


Battle.prototype.getAttackerRoll = function(attackerInfantry) {
  var attackerRoll = {
    2: this.diceEmulator.roll(1),
    3: this.diceEmulator.roll(2),
    'default': this.diceEmulator.roll(3)
  }
  return (attackerRoll[attackerInfantry] || attackerRoll['default']);
}

Battle.prototype.getDefenderRoll = function(defenderInfantry) {
  var defenderRoll = {
    1: this.diceEmulator.roll(1),
    'default': this.diceEmulator.roll(2)
  }
  return (defenderRoll[defenderInfantry] || defenderRoll['default']);
}

Battle.prototype.compareRolls = function (attackerRoll, defenderRoll, attackOwner, defendOwner) {
  var len;
  var results = { attacker: 0, defender: 0, winner: "tie"};
  if(attackerRoll.length < defenderRoll.length){
      len = attackerRoll.length;
  }else{
    len = defenderRoll.length;
  }

  for(var i = 0; i < len; i++){

    if(attackerRoll[i] > defenderRoll[i]) {
      results.defender--;
    }else{
      results.attacker--;
    }
  }
  console.log(attackerRoll);
  console.log(defenderRoll);

  if(results.attacker > results.defender) results.winner = attackOwner;
  if(results.attacker < results.defender) results.winner = defendOwner;
console.log(results);
  return results;
};

module.exports = Battle;
