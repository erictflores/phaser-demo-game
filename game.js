
//the code below is the original source code for the game. code above is random tests for my own sanity checks
var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser-demo', {preload: preload, create: create, update: update, render: render});

var player;
var starfield;


function preload() {
    game.load.image('starfield', './assets/starfield.png');
    game.load.image('ship', './assets/player.png');
}

function create() {
  //  The scrolling starfield background
    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    //  The hero!
    player = game.add.sprite(400, 500, 'ship');

}

function update() {
  //scroll the background
  starfield.tilePosition.y += 3

}

function render() {

}
