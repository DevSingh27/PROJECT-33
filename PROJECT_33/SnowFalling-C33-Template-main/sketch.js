var bg,Canvas;
var snow,snowy;
var boy,boyC;

function preload() {
   bg = loadImage("snow2.jpg");
   snow = loadImage("snow4.webp");
   boy = loadImage("boy.png");
}

function setup() {
  Canvas = createCanvas(800,400);
  boyC = createSprite(400,350,50,50);
  boyC.addImage(boy);
  boyC.scale = 0.3;

}

function draw() {
  background(bg); 
  
  if(frameCount%50 === 0){
    snowy = createSprite(Math.round(random(50,750)),Math.round(random(50,100)),10,10);
    snowy.addImage(snow);
    snowy.velocityX = 1;
    snowy.velocityY = 2;
    snowy.scale = 0.2;
    snowy.lifetime = 300;
  }

  if(boyC.y < 340){
    boyC.y = 350;
  }

  if(keyIsDown(RIGHT_ARROW)){
    boyC.x = boyC.x + 5;
  }

  if(keyIsDown(LEFT_ARROW)){
    boyC.x = boyC.x - 5;
  }
  drawSprites();
}

function keyPressed(){
    if(keyCode === 32){
      boyC.y = boyC.y - 4;
    }
}