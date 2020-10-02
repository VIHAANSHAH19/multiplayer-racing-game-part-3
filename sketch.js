var hypnoticBall, database;
var position;
var allPlayers
var gameState=0,playerCount=0;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 game=new Game()
 game.getState()
 game.start()
}

function draw(){
  if(playerCount==4){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }
}