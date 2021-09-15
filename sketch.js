var fixedRect,movingRect;


function setup()
{
  createCanvas(800,600);

  //to create rectangle sprite
  fixedRect = createSprite(400,200,50,80);
  movingRect = createSprite(400,400,80,30);

  //to add color
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";

  //to add Collider radius
  movingRect.debug = true;
  fixedRect.debug = true;

}

function draw()
{
  background(0,0,0);

  //to make the recatngle move with the mouse
  movingRect.y = mouseY;
  movingRect.x = mouseX;

 //collision algorithm
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 )
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "green";
  }

  else{
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";
  }

  movingRect.depth = fixedRect.depth + movingRect+1;
  drawSprites();
}