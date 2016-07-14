var Razor = {};


window.onload = function(){
  Razor.game = new Phaser.Game(window.innerWidth,
                               window.innerHeight,
                                Phaser.AUTO,
                                '',
                                {
                                  preload: preload,
                                  create: create,
                                  update: update
                                }
                              );
}

  var map;
  var layer;
  var player;
  var playerVelocity = 250;

  var preload = function(){
    Razor.game.load.tilemap('gamemap', 'assets/tilemaps/maze.json', null, Phaser.Tilemap.TILED_JSON);
    Razor.game.load.image('tiles', 'assets/tilemaps/tileset.png', 16, 16);
    Razor.game.load.image('player', 'assets/lives.png');
    Razor.game.load.image('back', 'assets/maze.png');
    Razor.game.load.image('blast', 'assets/blast.png');

  }

  var create = function(){
    Razor.game.add.sprite(0, 0, 'back');
    map = Razor.game.add.tilemap('gamemap', 16, 16);
    map.addTilesetImage('tileset','tiles');
    layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(1, 20000);
    Razor.game.world.setBounds(0, 0, 3200, 32280);
    Razor.keyboard = Razor.game.input.keyboard;
    Razor.game.physics.startSystem(Phaser.Physics.ARCADE);
    Razor.blastGroup = Razor.game.add.physicsGroup();
    Razor.blasts = [];
    player = new Player(window.innerWidth/2, window.innerHeight/2);
    var blast = new Blast(player);
    Razor.game.camera.follow(player.sprite);
    Razor.game.inputController = new InputController(player, Razor.keyboard,blast);
  }

 var update = function(){
  Razor.game.physics.arcade.collide(player.sprite, layer);
  if(this.game.inputController){
    this.game.inputController.update();
  }
 }
