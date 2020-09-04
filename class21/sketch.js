var fixedRect, movingRect;
var gameobj1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj1=createSprite(400,500,50,90);
  gameobj1.shapeColor="blue";
  gameobj1.debug=true;


  movingRect.velocityY = -5;
 gameobj1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

isbounce(movingRect,gameobj1)

  drawSprites();
}

function isbounce(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  &&object2.y - object1.y < object2.height/2 +object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY =  object2.velocityY * (-1);
}

}


