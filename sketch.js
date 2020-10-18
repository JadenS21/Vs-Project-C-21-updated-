var bullet1,bullet2,bulet3,bullet4;
var wall1,wall2,wall3,wall4,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,500);
 
  wall1=createSprite(1200,100,thickness,50);
  wall1.shapeColor=(80,80,80)
  bullet1=createSprite(50,100,20,20);
  bullet1.shapeColor="violet"
  
  wall2=createSprite(1200,200,thickness,50);
  wall2.shapeColor=(80,80,80)
  bullet2=createSprite(50,200,20,20);
  bullet2.shapeColor="violet"
  
  wall3=createSprite(1200,300,thickness,50);
  wall3.shapeColor=(80,80,80)
  bullet3=createSprite(50,300,20,20);
  bullet3.shapeColor="violet"
  
  wall4=createSprite(1200,400,thickness,50);
  wall4.shapeColor=(80,80,80)
  bullet4=createSprite(50,400,20,20);
  bullet4.shapeColor="violet"
 
  thickness=random(22,83);
 
  speed=random(223,321);
  weight=random(30,42);
  
}

function draw() {
  background(0);  
  
  bullet1.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  bullet4.velocityX=speed;
  
  
  if(hasCollided(bullet1,wall1))
{
  bullet1.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
   {
  wall1.shapeColor=color("red")
   }
  if(damage<10)
   {
  wall1.shapeColor=color("green")
   }
}

if(hasCollided(bullet2,wall2))
{
  bullet2.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
   {
  wall2.shapeColor=color("red")
   }
  if(damage<10)
   {
  wall2.shapeColor=color("green")
   }
}

if(hasCollided(bullet3,wall3))
{
  bullet3.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
   {
  wall3.shapeColor=color("red")
   }
  if(damage<10)
   {
  wall3.shapeColor=color("green")
   }
}

if(hasCollided(bullet4,wall4))
{
  bullet4.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
   {
  wall4.shapeColor=color("red")
   }
  if(damage<10)
   {
  wall4.shapeColor=color("green")
   }
}
  
  drawSprites();
}

function hasCollided(bullet,wall){
 bulletRightEdge=bullet.x +bullet.width;
 wallLeftEdge=wall.x

 if (bulletRightEdge>=wallLeftEdge)
  {
   return true
  }
 return false

}