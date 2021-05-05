var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255,255,255);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, 200);
  speed = random(223,321);
  weight = random(30,52);
 

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,255 );  
  drawSprites();

  //algorithm
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage =  0.5 * weight * speed * speed/(thickness * thickness * thickness);
    console.log(damage);
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
}
function hasCollided(lbullet,lwall){
  if(lbullet.x+lbullet.width>=lwall.x)
  {
    return true;
  }
  
    return false;
  
}