class Question{
constructor(){
this.input = createInput("Name");
this.input2 = createInput("answer here") 
this.title = createElement('h1');
this.question = createElement('h3');
this.submit = createButton('submit');
this.option1 = createElement('h4');
this.option2 = createElement('h4');
this.option3 = createElement('h4');
this.option4 = createElement('h4');
}

hide(){
this.submit.hide();
this.title.hide();
this.input.hide();
this.input2.hide();
}

display(){
this.title.html("My Quiz Game");
this.title.position(500,50);
this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
this.question.position(300,150);
this.option1.html("1: Everyone");
this.option1.position(300,175);
this.option2.html("2: Eye");
this.option2.position(300,200);
this.option3.html("3: Envelope");
this.option3.position(300,225);
this.option4.html("4: Estimate");
this.option4.position(300,250);
this.input.position(150,400);
this.input2.position(350,400);
this.submit.position(150,500);

this.submit.mousePressed(()=>{
this.title.hide();
this.submit.hide();
this.input.hide();
this.input2.hide();
contestant.name = this.input.value();
contestant.answer = this.input2.value();
contestantCount+=1;
contestant.index = contestantCount;
contestant.update();
contestant.updateCount(contestantCount);
});
}
}