
//the code below is the original source code for the game. code above is random tests for my own sanity checks
var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser-demo', {preload: preload, create: create, update: update, render: render});

var player;
var starfield;
var cursors;
var bank;

var ACCELERATION = 600;
var DRAG = 400;
var MAXSPEED = 400;


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
    player.body.maxVelocity.setTo(MAXSPEED, MAXSPEED);
    player.body.drag.setTo(DRAG, DRAG);


    // And some controls to play the game with
    cursors = game.input.keyboard.createCursorKeys();


}//ends the create function

function update() {
  //scroll the background
  starfield.tilePosition.y += 2;

  // reset the player, then check for movement keys
  // player.body.velocity.setTo(0, 0); deleted step
  player.body.acceleration.x = 0;

  if (cursors.left.isDown)
  {
    player.body.acceleration.x = -ACCELERATION;
  }
  else if (cursors.right.isDown)
  {
    player.body.acceleration.x = ACCELERATION;
  }
  // the code below allows y-axis movement
  // else if (cursors.up.isDown)
  // {
  //   player.body.acceleration.y = -ACCELERATION;
  // }
  // else if (cursors.down.isDown)
  // {
  //   player.body.acceleration.y = ACCELERATION;
  // }

  //Stop the player at the screen edges
  if (player.x > game.width - 50) {
    player.x = game.width - 50;
    player.body.acceleration.x = 0;
  }

  if (player.x < 50) {
    player.x = 50;
    player.body.acceleration.x = 0;
  }

  // the code below allows y-axis movement features
  // if (player.y > game.height - 50) {
  //   player.y = game.height - 50;
  //   player.body.acceleration.y = 0;
  // }

  // if (player.y < 50) {
  //   player.y = 50;
  //   player.body.acceleration.y = 0;
  // }

  //Squish and rotate ship for illusion of "banking"
  bank = player.body.velocity.x / MAXSPEED;
  player.scale.x = 1 - Math.abs(bank) / 2;
  player.angle = bank * 10;

}//ends the update function

function render() {

}//ends the render function
