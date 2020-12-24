
var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(30,346,20,20);
  monkey.addAnimation("monkey1",monkey_running);
  monkey.scale=0.1;
  
 ground=createSprite(200,380,900,10)
  ground.x = ground.width /2;
ground.velocityX = -6;
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
 if (keyDown("space") && monkey.y >= 219)  {
      monkey.velocityY = -12;
    
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
drawSprites();
  food();
  obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate())
  text("survival Time:"+ score,100,50);
  
  
  
  
  
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.06;
    banana.y=Math.round(random(120,200))
banana.velocityX=-5;
    banana.lifetime=300;
    foodGroup.add(banana);
  }
}  

function obstacles(){
   if(frameCount%300===0){
    obstacle=createSprite(220,346,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX = -6;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}

