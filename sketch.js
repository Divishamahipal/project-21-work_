var thickness, wall, height;
var speed, weight, bullet;

function setup() {
  height = 400;
 // thickness = 60;
  createCanvas(1000, height);

  speed = random(121, 123);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(900, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

  bullet = createSprite(50, 200, 20, 50);
  bullet.shapeColor = (60, 60, 60);
  bullet.velocityX = speed;
  bullet.collide(wall); 
}

function draw() {
  background(0, 0, 0); 

  //hasCollided(bullet, wall); 

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage >= 10){
      bullet.shapeColor = color(255, 0, 0);
    }

    if(damage < 10){
      bullet.shapeColor = color(0, 255, 0)
    }
  }
  
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}