var car, wall;
var speed, weight;
var crash;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90)
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

}

function draw() {
  background("black");  

  car.velocityX = speed;

  if(wall.x - car.x <= (car.width + wall.width)/2){
    car.velocityX = 0;

    crash = (0.5 * weight * speed * speed/22509);
    if(crash > 180){
      car.shapeColor = color(255, 0, 0);
    }
    if(crash < 180 && crash > 100){
      car.shapeColor = color(230, 230, 0);
    }
    if(crash < 100){
      car.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}