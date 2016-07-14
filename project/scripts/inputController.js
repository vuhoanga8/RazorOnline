class InputController{
constructor(player, keyboard, blast){
  this.player = player;
  this.keyboard = keyboard;
  this.blast = blast;
  this.lastShotTime = Razor.game.time.now;
  this.nextShotAt = 0;
  this.shotDelay = 3000;
}

update(){
      var direction = new Phaser.Point();
      if(this.keyboard.isDown(Phaser.KeyCode.LEFT)) direction.x = -1;
      else if (this.keyboard.isDown(Phaser.KeyCode.RIGHT)) direction.x = 1;
      else direction.x = 0;

      if(this.keyboard.isDown(Phaser.KeyCode.UP)) direction.y = -1;
      else if (this.keyboard.isDown(Phaser.KeyCode.DOWN)) direction.y = 1;
      else direction.y = 0;

      this.player.update(direction);
      this.blast.update(direction);

      if(this.keyboard.isDown(Phaser.KeyCode.SPACEBAR)
          && Razor.game.time.now - this.lastShotTime > 200){
        this.lastShotTime = Razor.game.time.now;
        this.fire();
    }
  }
  fire(){
    new Blast(this.player);
    }
  }
