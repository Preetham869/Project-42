const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var thunderImg,thunder;
var walking, walkingAnimation;
var raindrops = [];
var batman;

function preload(){
    thunderImg = loadAnimation("1.png","1.png","1.png",
    "2.png","2.png","2.png",
    "3.png","3.png","3.png",
    "4.png","4.png","4.png");

   walkingAnimation =  loadAnimation("walking_8.png",
    "walking_7.png",
    "walking_6.png",
    "walking_5.png",
    "walking_4.png",
    "walking_3.png",
    "walking_2.png",
    "walking_1.png");
}

function setup(){
   createCanvas(400,800);

   engine = Engine.create();
   world = engine.world;

  batman = new Umbrella(400,400,225);

   thunder = createSprite(200,80,400,30);
   thunder.addAnimation("thunder",thunderImg);
   thunder.scale=0.5;


  walking = createSprite(200,590,50,50);
  walking.addAnimation("walking",walkingAnimation);
  walking.scale = 0.5; 
 
    
}

function draw(){
    background(0);
    Engine.update(engine);
    batman.display();
  

   if(frameCount % 1 === 0){
     var raindrop = new Drops(random(0,400),-100,7);
     raindrops.push(raindrop);
   }
  
   

for(var i=0; i< raindrops.length;i++){
  raindrops[i].fall(40);
  raindrops[i].velocityY++
  raindrops[i].display();
}



    drawSprites();
  }   

