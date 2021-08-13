var bow , arrow,  background, green, balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")

  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  arrowGroup = new Group()
}
// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}
function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  
  
  if (World.frameCount % 100 == 0) {
    balloon = createSprite(0,Math.round(random(20, 370)), 10, 10)
    balloon.velocityX = 3
    balloon.lifetime = 150
    var select_balloon = Math.round(random(1,4));
    switch(select_balloon){
      case 1: balloon.addImage(red_balloonImage)
      balloon.scale=0.1
      break
      case 2: balloon.addImage(green_balloonImage)
      balloon.scale=0.1
      break
      case 3: balloon.addImage(blue_balloonImage)
      balloon.scale=0.1
      break
      case 4: balloon.addImage(pink_balloonImage)
      balloon.scale=1.1
      break
  
    
    }
    if(arrowGroup.isTouching(balloon)){
      balloon.visible = false
    }
   if(keyDown("space")){
     createArrow()
   }
  }
  
  drawSprites();
}





