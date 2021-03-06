var playerTurn, ownedInfantry, ownedTerritories, ownedContinents, territoryText, button,
  attackerInfo, defenderInfo, phase;

window.onload = function() {
  var game = new Phaser.Game(900, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render, actionOnClick: actionOnClick });
  var rect;
  var peoria, sunCity, glendale, youngtown, northPhoenix, paradiseValley, caveCreek, northScottsdale, scottsdale, fountainHills, goodyear, park, avondale, tolleson, phoenix, chandler, northMesa, southPhoenix, chandler, gilbert, southMesa;
  var graphics;

  function preload(){
    game.load.spritesheet('button', '../images/youtube.png', 193, 71);
  }

  function create() {
    var color;
    this.stage.backgroundColor = "#000";
    this.pieceCounter = 0;
    this.players = [new Player('Player One'), new Player('Player Two'), new Player('Player Three'), new Player('Player Four')];
    this.turnIdx = 0;
    this.turn = this.players[this.turnIdx];
    this.state = 'gameStart';
    this.selectedTerritory = null;
    this.selectedEnemy = null;
    this.stateCycle = ['placement', 'attack', 'movement'];
    this.moveFromTerritory = null;
    this.moveToTerritory = null;
    this.numPlayers = 3;
    // rect = new Phaser.Rectangle(50, 50, 50, 50);
    // rect.neighbors = ['hello', 'world'];

    peoria = new Phaser.Polygon();

    //Peoria
    //  And then populate it via setTo, using any combination of values as above
    peoria.setTo([ new Phaser.Point(50, 50), new Phaser.Point(175, 50), new Phaser.Point(175, 200), new Phaser.Point(125, 200), new Phaser.Point(125, 100), new Phaser.Point(50, 100) ]);

    graphics = game.add.graphics(0, 0);
    var peoriaTerritory = new Territory('Peoria', peoria);

    color = 0xffff00;
    peoriaTerritory.color = color;

    graphics.beginFill(color);
    graphics.drawPolygon(peoria.points);
    graphics.endFill();

    sunCity = new Phaser.Polygon();
    // Sun City
    //  And then populate it via setTo, using any combination of values as above
    sunCity.setTo([ new Phaser.Point(25, 100), new Phaser.Point(25, 175), new Phaser.Point(125, 175), new Phaser.Point(125, 100) ]);

    var sunCityTerritory = new Territory('Sun City', sunCity);

    color = 0xffff66;
    sunCityTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(sunCity.points);
    graphics.endFill();

    youngtown = new Phaser.Polygon();

    // Youngtown
    //  And then populate it via setTo, using any combination of values as above
    youngtown.setTo([ new Phaser.Point(100, 175), new Phaser.Point(100, 225), new Phaser.Point(125, 225), new Phaser.Point(125, 175) ]);

    var youngtownTerritory = new Territory('Youngtown', youngtown);

    color = 0xffff99;
    youngtownTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(youngtown.points);
    graphics.endFill();

    glendale = new Phaser.Polygon();
    // Glendale
    //  And then populate it via setTo, using any combination of values as above
    glendale.setTo([new Phaser.Point(125, 200), new Phaser.Point(175, 200), new Phaser.Point(175, 100), new Phaser.Point(225, 100), new Phaser.Point(225, 250), new Phaser.Point(125, 250)]);

    var glendaleTerritory = new Territory('Glendale', glendale);

    color = 0xffcc00;
    glendaleTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(glendale.points);
    graphics.endFill();

    northPhoenix = new Phaser.Polygon();
    // North phoenix
    //  And then populate it via setTo, using any combination of values as above
    northPhoenix.setTo([new Phaser.Point(175, 60), new Phaser.Point(350, 60), new Phaser.Point(350, 200), new Phaser.Point(300, 200), new Phaser.Point(300, 250), new Phaser.Point(225, 250), new Phaser.Point(225, 100), new Phaser.Point(175, 100)]);

    var northPhoenixTerritory = new Territory('North Phoenix', northPhoenix);

    color = 0x33cc33;
    northPhoenixTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(northPhoenix.points);
    graphics.endFill();

    paradiseValley = new Phaser.Polygon();
    // paradise valley
    //  And then populate it via setTo, using any combination of values as above
    paradiseValley.setTo([new Phaser.Point(300, 200), new Phaser.Point(350,200), new Phaser.Point(350, 250), new Phaser.Point(300, 250) ]);

    var paradiseValleyTerritory = new Territory('Paradise Valley', paradiseValley);

    color = 0x4477ff;
    paradiseValleyTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(paradiseValley.points);
    graphics.endFill();

    caveCreek = new Phaser.Polygon();
    // cave creek
    //  And then populate it via setTo, using any combination of values as above
    caveCreek.setTo([new Phaser.Point(300,10), new Phaser.Point(375, 10), new Phaser.Point(375, 60),new Phaser.Point(300, 60) ]);

    var caveCreekTerritory = new Territory('Cave Creek', caveCreek);

    color = 0x3399ff;
    caveCreekTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(caveCreek.points);
    graphics.endFill();

    northScottsdale = new Phaser.Polygon();
    // north scottsdale
    //  And then populate it via setTo, using any combination of values as above
    northScottsdale.setTo([new Phaser.Point(350, 60),new Phaser.Point(375, 60), new Phaser.Point(375, 10), new Phaser.Point(450, 10), new Phaser.Point(450, 190), new Phaser.Point(350, 190)]);

    var northScottsdaleTerritory = new Territory('North Scottsdale', northScottsdale);

    color = 0x0066ff;
    northScottsdaleTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(northScottsdale.points);
    graphics.endFill();

    scottsdale = new Phaser.Polygon();
    // scottsdale
    //  And then populate it via setTo, using any combination of values as above
    scottsdale.setTo([new Phaser.Point(350, 190), new Phaser.Point(350, 300), new Phaser.Point(375, 300), new Phaser.Point(375, 220), new Phaser.Point(450, 220), new Phaser.Point(450, 190)]);

    var scottsdaleTerritory = new Territory('Scottsdale', scottsdale);

    color = 0x66ccff;
    scottsdaleTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(scottsdale.points);
    graphics.endFill();

    fountainHills = new Phaser.Polygon();
    // fountain hills
    //  And then populate it via setTo, using any combination of values as above
    fountainHills.setTo([new Phaser.Point(450, 170), new Phaser.Point(450, 220), new Phaser.Point(500, 220), new Phaser.Point(500, 170)]);

    var fountainHillsTerritory = new Territory('Fountain Hills', fountainHills);

    color = 0x0044ff;
    fountainHillsTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(fountainHills.points);
    graphics.endFill();

    phoenix = new Phaser.Polygon();
    // phoenix
    //  And then populate it via setTo, using any combination of values as above
    phoenix.setTo([new Phaser.Point(150, 250), new Phaser.Point(350, 250), new Phaser.Point(350, 300), new Phaser.Point(325, 300), new Phaser.Point(325, 350), new Phaser.Point(190, 350), new Phaser.Point(190, 325), new Phaser.Point(150, 325)]);

    var phoenixTerritory = new Territory('Phoenix', phoenix);

    color = 0xccffcc;
    phoenixTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(phoenix.points);
    graphics.endFill();

    tolleson = new Phaser.Polygon();
    // tolleson
    //  And then populate it via setTo, using any combination of values as above
    tolleson.setTo([new Phaser.Point(130, 325), new Phaser.Point(190, 325), new Phaser.Point(190, 350), new Phaser.Point(130, 350)]);

    var tollesonTerritory = new Territory('Tolleson', tolleson);

    color = 0x99ff99;
    tollesonTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(tolleson.points);
    graphics.endFill();

    avondale = new Phaser.Polygon();
    // avondale
    //  And then populate it via setTo, using any combination of values as above
    avondale.setTo([new Phaser.Point(100, 275), new Phaser.Point(125, 275), new Phaser.Point(125, 260), new Phaser.Point(150, 260), new Phaser.Point(150, 325), new Phaser.Point(130, 325), new Phaser.Point(130, 350), new Phaser.Point(150, 350), new Phaser.Point(150, 400), new Phaser.Point(100, 400)]);

    var avondaleTerritory = new Territory('Avondale', avondale);

    color = 0xff0000;
    avondaleTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(avondale.points);
    graphics.endFill();

    park = new Phaser.Polygon();
    // park
    //  And then populate it via setTo, using any combination of values as above
    park.setTo([new Phaser.Point(90, 255), new Phaser.Point(125, 255), new Phaser.Point(125, 275), new Phaser.Point(90, 275)]);

    var parkTerritory = new Territory('Park', park);

    color = 0xff6600;
    parkTerritory.color = color;
    graphics.beginFill(color);
    graphics.drawPolygon(park.points);
    graphics.endFill();

    goodyear = new Phaser.Polygon();
    // goodyear
    //  And then populate it via setTo, using any combination of values as above
    goodyear.setTo([new Phaser.Point(40, 255), new Phaser.Point(90, 255), new Phaser.Point(90, 275), new Phaser.Point(100, 275), new Phaser.Point(100, 450), new Phaser.Point(40, 450)]);

    var goodyearTerritory = new Territory('Goodyear', goodyear);
    graphics.beginFill(0xff3300);
    graphics.drawPolygon(goodyear.points);
    graphics.endFill();

    southPhoenix = new Phaser.Polygon();
    // southPhoenix
    //  And then populate it via setTo, using any combination of values as above
    southPhoenix.setTo([ new Phaser.Point(150, 350), new Phaser.Point(150, 375), new Phaser.Point(210, 375), new Phaser.Point(210, 425), new Phaser.Point(325, 425), new Phaser.Point(325, 350)]);

    var southPhoenixTerritory = new Territory('South Phoenix', southPhoenix);

    graphics.beginFill(0x66ff66);
    graphics.drawPolygon(southPhoenix.points);
    graphics.endFill();

    tempe = new Phaser.Polygon();
    // tempe
    //  And then populate it via setTo, using any combination of values as above
    tempe.setTo([new Phaser.Point(325, 300), new Phaser.Point(375, 300), new Phaser.Point(375, 400), new Phaser.Point(325, 400)]);

    var tempeTerritory = new Territory('Tempe', tempe);

    graphics.beginFill(0x009933);
    graphics.drawPolygon(tempe.points);
    graphics.endFill();

    chandler = new Phaser.Polygon();
    // chandler
    //  And then populate it via setTo, using any combination of values as above
    chandler.setTo([new Phaser.Point(325, 400), new Phaser.Point(375, 400), new Phaser.Point(375, 375), new Phaser.Point(400, 375), new Phaser.Point(400, 425), new Phaser.Point(425, 425), new Phaser.Point(425, 475), new Phaser.Point(350, 475), new Phaser.Point(350, 425), new Phaser.Point(325, 425)]);

    var chandlerTerritory = new Territory('Chandler', chandler);

    graphics.beginFill(0xff00ff);
    graphics.drawPolygon(chandler.points);
    graphics.endFill();

    gilbert = new Phaser.Polygon();
    // gilbert
    //  And then populate it via setTo, using any combination of values as above
    gilbert.setTo([new Phaser.Point(400,350), new Phaser.Point(400, 425), new Phaser.Point(500, 425), new Phaser.Point(500, 350)]);

    var gilbertTerritory = new Territory('Gilbert', gilbert);

    graphics.beginFill(0xcc00cc);
    graphics.drawPolygon(gilbert.points);
    graphics.endFill();

    southMesa = new Phaser.Polygon();
    // southMesa
    //  And then populate it via setTo, using any combination of values as above
    southMesa.setTo([new Phaser.Point(375,310), new Phaser.Point(575,310), new Phaser.Point(575,375), new Phaser.Point(500,375), new Phaser.Point(500,350), new Phaser.Point(400,350), new Phaser.Point(400,375), new Phaser.Point(375,375)]);

    var southMesaTerritory = new Territory('South Mesa', southMesa);

    graphics.beginFill(0xff66ff);
    graphics.drawPolygon(southMesa.points);
    graphics.endFill();

    mesa = new Phaser.Polygon();
    // mesa
    //  And then populate it via setTo, using any combination of values as above
    mesa.setTo([new Phaser.Point(375, 260), new Phaser.Point(575, 260), new Phaser.Point(575, 310), new Phaser.Point(375,310)]);

    var mesaTerritory = new Territory('Mesa', mesa);

    graphics.beginFill(0xff99ff);
    graphics.drawPolygon(mesa.points);
    graphics.endFill();

    // Setting Neighbor Territories
    peoriaTerritory.setNeighbors([sunCityTerritory, glendaleTerritory, youngtownTerritory, northPhoenixTerritory]);
    sunCityTerritory.setNeighbors([peoriaTerritory, youngtownTerritory]);
    youngtownTerritory.setNeighbors([glendaleTerritory, sunCityTerritory, peoriaTerritory]);
    glendaleTerritory.setNeighbors([peoriaTerritory,youngtownTerritory,northPhoenixTerritory, phoenixTerritory]);
    northPhoenixTerritory.setNeighbors([peoriaTerritory, glendaleTerritory, phoenixTerritory, paradiseValleyTerritory, scottsdaleTerritory, northScottsdaleTerritory, caveCreekTerritory]);
    paradiseValleyTerritory.setNeighbors([northPhoenixTerritory, scottsdaleTerritory, phoenixTerritory]);
    phoenixTerritory.setNeighbors([glendaleTerritory, northPhoenixTerritory, paradiseValleyTerritory, scottsdaleTerritory, tempeTerritory, southPhoenixTerritory, tollesonTerritory, avondaleTerritory]);
    caveCreekTerritory.setNeighbors([northPhoenixTerritory, northScottsdaleTerritory]);
    northScottsdaleTerritory.setNeighbors([northPhoenixTerritory, caveCreekTerritory, fountainHillsTerritory, scottsdaleTerritory]);
    scottsdaleTerritory.setNeighbors([northPhoenixTerritory, northScottsdaleTerritory, paradiseValleyTerritory, phoenixTerritory, tempeTerritory, mesaTerritory, fountainHillsTerritory]);
    fountainHillsTerritory.setNeighbors([northScottsdaleTerritory, scottsdaleTerritory]);
    goodyearTerritory.setNeighbors([parkTerritory, avondaleTerritory]);
    parkTerritory.setNeighbors([goodyearTerritory, avondaleTerritory]);
    avondaleTerritory.setNeighbors([parkTerritory, goodyearTerritory, tollesonTerritory, phoenixTerritory, southPhoenixTerritory]);
    tollesonTerritory.setNeighbors([avondaleTerritory, phoenixTerritory, southPhoenixTerritory]);
    southPhoenixTerritory.setNeighbors([avondaleTerritory, tollesonTerritory, phoenixTerritory, tempeTerritory, chandlerTerritory]);
    tempeTerritory.setNeighbors([southPhoenixTerritory, phoenixTerritory, scottsdaleTerritory, mesaTerritory, southMesaTerritory, chandlerTerritory]);
    mesaTerritory.setNeighbors([scottsdaleTerritory, tempeTerritory, southMesaTerritory]);
    southMesaTerritory.setNeighbors([mesaTerritory, tempeTerritory, chandlerTerritory, gilbertTerritory]);
    gilbertTerritory.setNeighbors([southMesaTerritory, chandlerTerritory]);
    chandlerTerritory.setNeighbors([southPhoenixTerritory, tempeTerritory, southMesaTerritory, gilbertTerritory]);

    // Set game territories array
    this.territories = [glendaleTerritory, northPhoenixTerritory, paradiseValleyTerritory, scottsdaleTerritory, tempeTerritory, southPhoenixTerritory, tollesonTerritory, avondaleTerritory, peoriaTerritory, youngtownTerritory, sunCityTerritory, caveCreekTerritory, northScottsdaleTerritory, fountainHillsTerritory, parkTerritory, goodyearTerritory, chandlerTerritory, gilbertTerritory, southMesaTerritory, mesaTerritory, phoenixTerritory];

    // Set up Continents
    var northWestValley = new Continent('North West Valley', [glendaleTerritory, peoriaTerritory, youngtownTerritory, sunCityTerritory], 4);
    var westValley = new Continent('West Valley', [goodyearTerritory, avondaleTerritory, parkTerritory], 3);
    var centralValley = new Continent('Central Valley', [northPhoenixTerritory, southPhoenixTerritory, phoenixTerritory, tempeTerritory, tollesonTerritory], 5);
    var eastValley = new Continent('East Valley', [southMesaTerritory, mesaTerritory, chandlerTerritory, gilbertTerritory], 4);
    var northEastValley = new Continent('North East Valley', [caveCreekTerritory, scottsdaleTerritory, northScottsdaleTerritory, paradiseValleyTerritory, fountainHillsTerritory], 4);

    // Set game Continents array
    this.continents = [northEastValley, northWestValley, eastValley, westValley, centralValley];

    button = game.add.button(game.world.centerX + game.world.centerX/2, game.world.centerY - 71/2, 'button', this.actionOnClick, this, 2, 1, 0);

    phase = game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY - 71/2 - 30, '', { font: "15px Arial", fontWeight: "bold", fill: "#ff0000", align: "left" });

    button.visible = false;
    game.add.text(game.world.centerX + game.world.centerX/4, game.world.centerY - 3 * game.world.centerY/4, 'Phoenix Valley Risk', { font: "35px Arial", fill: "#ffffff", align: "left"})
    game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY - 5 * game.world.centerY/8, '(Developer Edition)', { font: "10px Arial", fill: "#ffffff", align: "center"})

    territoryText= game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY - game.world.centerY/2, 'Territory: ', { font: "15px Arial", fill: "#ffffff", align: "left" });

    playerName = game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY + game.world.centerY/2, this.turn.name, { font: "25px Arial", fill: "#ffffff", align: "center" });
    ownedInfantry = game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY + game.world.centerY/2 + 50, 'Total Units: ' + this.turn.sumInfantry(), { font: "15px Arial", fill: "#ffffff", align: "left" });
    ownedTerritories = game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY + game.world.centerY/2 + 75, 'Territories: ' + this.turn.territories.length, { font: "15px Arial", fill: "#ffffff", align: "left" });
    ownedContinents = game.add.text(game.world.centerX + game.world.centerX/2, game.world.centerY + game.world.centerY/2 + 100, 'Continents: ' + this.turn.ownedContinents.length, { font: "15px Arial", fill: "#ffffff", align: "left" });


    attackerInfo = game.add.text(game.world.centerX - 3*game.world.centerX/4, game.world.centerY + game.world.centerY/2 + 50, '', { font: "15px Arial", fill: "#ffffff", align: "left" });

    defenderInfo = game.add.text(game.world.centerX - game.world.centerX/4, game.world.centerY + game.world.centerY/2 + 50, '', { font: "15px Arial", fill: "#ffffff", align: "left" });

    this.territories.forEach(function(territory){
      territory.text = (game.add.text(territory.phaserObj.points[0].x, territory.phaserObj.points[0].y, territory.infantry, { font: "20px Times New Roman", fill: "#000", align: "center" }));
    });

    game.stage.scale.pageAlignHorizontally = true;
    game.stage.scale.pageAlignVertically = true;
    game.scale.refresh();

  }

  function updateTerritoriesText(territories){
    territories.forEach(function(territory){
      territory.text.setText(territory.infantry);
    });
  }
  function render() {
    // game.debug.rectangle(rect);  ``
  }
  function update() {
    updateTerritoriesText(this.territories);
    ///territory.text.setText(territory.infantry);
    if (this.state === 'gameStart') {
      phase.setText('Current Phase: Gamestart');
      gameStart(this);
    } else if (this.state === 'placement') {
      phase.setText('Current Phase: Placement');
      button.visible = false;
      placement(this);
    } else if (this.state === 'attack') {
      phase.setText('Current Phase: Attack');
      button.visible = true;
      attack(this);

      if(this.selectedTerritory) attackerInfo.setText('Attacker: ' + this.selectedTerritory.owner.name +
        '\n\nTerritory Name: ' + this.selectedTerritory.name + '\nTotal Units: ' + this.selectedTerritory.infantry);
      else attackerInfo.setText('');

      if(this.selectedEnemy) defenderInfo.setText('Enemy: ' + this.selectedEnemy.owner.name +
        '\n\nTerritory Name: ' + this.selectedEnemy.name + '\nTotal Units: ' + this.selectedEnemy.infantry);
      else defenderInfo.setText('');

    } else if (this.state === 'movement') {
      phase.setText('Current Phase: Movement');
      movement(this);
    }

    playerName.setText(this.turn.name);
    ownedInfantry.setText('Total Units: ' + this.turn.sumInfantry());
    ownedTerritories.setText('Territories: ' + this.turn.territories.length);
    ownedContinents.setText('Continents: ' + this.turn.ownedContinents.length);

    var cursorView =polygonMouseCheck(this.territories, this, graphics);
    if(cursorView){
      if(!cursorView.owner){
        territoryText.setText('Territory: ' + cursorView.name + '\nOwner: For Sale!' + '\nInfantry: ' + cursorView.infantry);
      }
      else{
        territoryText.setText('Territory: ' + cursorView.name + '\nOwner: ' + cursorView.owner.name + '\nInfantry: ' + cursorView.infantry);
      }
    }
  }

  function actionOnClick() {
    var idx = this.stateCycle.indexOf(this.state);
    if (this.state === 'movement') {
      var playerIdx = this.players.indexOf(this.turn);
      this.turn = this.players[++playerIdx % this.numPlayers];
      this.playerInfantry = numNewInfantry(this.turn, this);
      this.moveToTerritory = null;
      this.moveFromTerritory = null;
    } else if (this.state === 'attack') {
      this.selectedTerritory = null;
      this.selectedEnemy = null;
    }
    this.state = this.stateCycle[++idx % 3];
  }
}
