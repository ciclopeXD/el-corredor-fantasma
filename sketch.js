var towerImg, tower;
var doorImg, door, doorsGroup,puerta;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 3;
  ghost=createSprite(300,300);
ghost.addImage(ghostImg);
ghost.scale=0.3
doorsGroup=new Group();
climbersGroup=new Group();
  
}
function doors(){
puerta=Math.round(random(100,500))
  if(frameCount %60 === 0){
    door=createSprite(puerta,0);
    door.addImage(doorImg);
    door.velocityY=3
    door.lifetime=200;
    doorsGroup.add(door);
climber=createSprite(puerta,50);
climber.addImage(climberImg);
climber.velocityY=3;
climber.lifetime=200;
climbersGroup.add(climber);

door.depth=ghost.depth;
ghost.depth=ghost.depth+5;
  }
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300

 
    }
    ghost.velocityY=5;
if(keyDown("space")){
  ghost.velocityY=-10
}

    doors();
    drawSprites();
}

