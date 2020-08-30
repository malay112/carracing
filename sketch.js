var canvas, backgroundImage;
var crowdImg;

var info = "string";


var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1, car2, car3, car4;
var cars = [];

var carimg1, carimg2, carimg3, carimg4;
var track, ground;

var form, player, game;

var carSound;


function preload() {
  carimg1 = loadImage("images/car1.png");
  carimg2 = loadImage("images/car2.png");
  carimg3 = loadImage("images/car3.png");
  carimg4 = loadImage("images/car4.png");

  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");

  carSound = loadSound("Sound/car.mp3");

  crowdImg = loadImage("images/crowd.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth-50, displayHeight-50);
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

  if(gameState === 2) {
    game.end();
  }
}
