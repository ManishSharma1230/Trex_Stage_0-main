
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup(){
  createCanvas(600, 200);
  
  // Trex Sprite
  trex = createSprite(50, 165, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  // Ground Sprite
  ground = createSprite(300, 190, 600, 2);
}

function draw(){
  background("white");
  drawSprites();

  // Gravity
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);

  if(keyDown("SPACE")){
    trex.velocityY = -7;
  }


}
