let balls = [];
let floor;
let bg = 0;
// **************
let hp = 3;
let score = 0;
// *******************
function setup(){
  frameRate(60);
  createCanvas(windowWidth - 20, windowHeight - 20); //game work on screen of all sizes
  rectMode(CENTER);
  floor = new Floor();
}

function draw(){
  // background and top lines
  background(bg);
  line(0, 70, width, 70);
  line(50, 0 , 50 , 70);
  line(0, 35, 50, 35);
  stroke(255); //
// score and hp
  fill(255); // **fill for the score
  textSize(30);
  textFont('Helvetica');
  text(hp, 10, 30);
  text(score, 10, 63);
  loosingCondition();
// ball object

// *** Runs collision detection only if 1 ball is in the array
if (balls.length == 1){
  if (balls[0].hits(floor)){
    // ****adds +1 to the score if hit
    score++
    // **** removes ball from the array;
    balls[0].rebounce();

  }
}
// ************ irritates thru the balls array
  for ( i = 0; i < balls.length; i++){
    balls[i].falling();
    balls[i].show();
    balls[i].removing();
  }

// floor object

  floor.show();
  floor.update();
  levelUp();


}

// ****** adds ball object to the array and prevent from having more then 1 object at at time
function mousePressed(){
  if(mouseY <= 70 && balls.length == 0){
  balls.push(new Ball(mouseX, mouseY, 30));
}
}

// loosing condition if health goes to 0

function loosingCondition(){
  if (hp <= 0){
    print("you lost");
    textSize(20)
    text("Looser kid with a score of " + score, width/2 - 100, height/2);
    text("yeah, hit refresh retard.", width/2 - 100, height/2 + 30)
    noLoop();
    }
}
// Winning condition if score == 45

  function winnerCondition(){
    textSize(20)
    text("WTF??????????? " + score, width/2 - 100, height/2);
    text("you are a wizard, Gary..", width/2 - 100, height/2 + 30)
    noLoop();
  }
