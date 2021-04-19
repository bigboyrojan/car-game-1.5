var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var ground;
var cars, car1, car2, car3, car4;
var track;
var whitecar,redcar,bluecar,blackcar;


function preload(){
whitecar = loadImage("images/car1.png");
track = loadImage("images/track.jpg");
redcar = loadImage("images/car2.png");
bluecar = loadImage("images/car3.png");
blackcar = loadImage("images/car4.png");
ground = loadImage("images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
  game.end();
  }
}
