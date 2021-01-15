
function scene0() {
  background("blue");var timerValue = 15;
var good = 1;
var star = 0;
var landscape;
var fuel;
var man;
var bad = [];
var bonus = [];
var currentScene = 1;
var endSceneCountdown = 0;

function setup() {
  createCanvas(640, 360);
  man = new Person();
  drawScene1();
  for (let i = 0; i < 150; i++) {
    bad[i] = new Obstacle();
  }
  for (let j = 0; j < 35; j++) {
    bonus[j] = new Special();
  }
  setInterval(timeIt, 1000);

}
// scene 1, the start scene
var drawScene1 = function() {
  currentScene = 1;
  man.score = 0;
  background(0, 0, 255);
  textSize(50);
  textAlign(CENTER);
  fill(0);
  text("Asteroid collector!!!", width / 2, 50);
  textSize(30);
  fill("red")
  text("Click to start mission", width / 2, 100);
  noStroke();
  fill("red");
  rect(width / 4, height / 2, 50, 50);
  fill(255);
  rect(width / 2, height * 3 / 4, 60, 60);
}

var drawScene2 = function() {
  currentScene = 2;
  man.score = 0;
  background(0, 0, 255);
  textSize(50);
  textAlign(CENTER);
  fill("white");
  text("The Task", width / 2, 50);
  textSize(20);
  text("collect as many asteroid samples as you can in 15 seconds", width / 2, 75);
  textSize(50);
  fill(255,0,0);
  text("space asteroids!!!", 100, 100);
  text("press s key to start", 100, 200);
}
