
//the code below is the original source code for the game. code above is random tests for my own sanity checks
var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser-demo', {preload: preload, create: create, update: update, render: render});

var player;
var starfield;
var cursors;


function preload() {
    game.load.image('starfield', './assets/starfield.png');
    game.load.image('ship', './assets/player.png');
}// ends the preload function

function create() {
  //  The scrolling starfield background
    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    //  The hero!
    player = game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);//this gives us access to the arcade physics engine so we can add physics to our game

    // And some controls to play the game with
    cursors = game.input.keyboard.createCursorKeys();


}//ends the create function

function update() {
  //scroll the background
  starfield.tilePosition.y += 3;

  // reset the player, then check for movement keys
  player.body.velocity.setTo(0, 0);

  if (cursors.left.isDown)
  {
    player.body.velocity.x = -200;
  }
  else if (cursors.right.isDown)
  {
    player.body.velocity.x = 200
  }
  else if (cursors.up.isDown)
  {
    player.body.velocity.y = -200;
  }
  else if (cursors.down.isDown)
  {
    player.body.velocity.y = 200;
  }

}//ends the update function

function render() {

}//ends the render function
