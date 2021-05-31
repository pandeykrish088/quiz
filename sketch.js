var gameState = 0;
var contestantCount = 0;
var database;
var quiz;
var question;
var contestant;
var allContestants;


function setup(){
createCanvas(1000,600);
database = firebase.database();
quiz = new Quiz();
quiz.getState();
quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 2){
  quiz.update(1);
  }
  
  if(gameState === 1){
  clear();
  quiz.play();
  }
}
