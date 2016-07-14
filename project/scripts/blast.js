class Blast{
  constructor(player){
    this.sprite = Razor.blastGroup.create(player.sprite.x, player.sprite.y, 'blast');
    this.sprite.anchor.set(0.5,0.5);
    Razor.game.physics.arcade.enable(this.sprite);
  }
  update(direction){
    if(direction.x < 0){
      this.sprite.x = player.sprite.x;
    }
    else if (direction.x > 0){
      this.sprite.x = player.sprite.x;
    }
    else{
      this.sprite.x = player.sprite.x;
    }

    if(direction.y < 0){
      this.sprite.y = player.sprite.y;
    }
    else if (direction.y > 0){
      this.sprite.y = player.sprite.y;
    }
    else{
      this.sprite.y = player.sprite.y;
    }
  }
}
