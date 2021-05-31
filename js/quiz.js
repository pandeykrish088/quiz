class Quiz {
constructor() {

} 

getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
}
);
}

update(state){
database.ref('/').update({
gameState:state
}
);
}

async start(){
if(gameState === 0){
contestant = new Contestant();
var contestantCountRef = await database.ref("contestantCount").once("value");
if(contestantCountRef.exists()){
contestantCount = contestantCountRef.val();
contestant.getCount();
}
question = new Question();
question.display();
}
}

play(){
question.hide();
background("yellow");
fill(0);
textSize(32);
text("Result of the quiz",350,50);
text("_______________________________________",330,65);
Contestant.getContestantInfo();

if(allContestants !== undefined){
var displayAnswer = 430;
fill("blue");
textSize(20);
text("*NOTE:contestant who answered correct are highlighted in green color",130,430);
for(var plr in allContestants){
var correctAns = "2";
if(correctAns === allContestants[plr].answer){
fill("green");
}
else{
fill("red");
}

displayAnswer += 30;
textSize(20);
text(allContestants[plr].name + ":" + allContestants[plr].answer,250,displayAnswer)
}
}
}
}