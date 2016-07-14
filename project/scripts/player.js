class Player{
  constructor(x, y){
    this.sprite = Razor.game.add.sprite(x, y, 'player');
    Razor.game.physics.arcade.enable(this.sprite);
    this.lastShotTime = Razor.game.time.now;
    this.sprite.body.collideWorldBounds = true;
  }
  update(direction){
    if(direction.x < 0){
      this.sprite.body.velocity.x = -800;
    }
    else if (direction.x > 0){
      this.sprite.body.velocity.x = 800;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(direction.y < 0){
      this.sprite.body.velocity.y = -800;
    }
    else if (direction.y > 0){
      this.sprite.body.velocity.y = 800;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  }
}
