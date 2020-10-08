
var car, wall;
var speed, weight;


function setup() {
  createCanvas(800,400);

  wall = createSprite(700,200,50,300);
  wall.shapeColor = "gray";

  car = createSprite(100, 200, 20, 20);
  car.shapeColor = "blue";

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

}

function draw() {
  background(0); 
  
  

  car.velocityX = speed;
  
  if (wall.x - car.x < wall.width/2 + car.width/2) {
  car.velocityX = 0;
  
  var deformation = (0.5 * weight * speed * speed)/22509;
  
  if(deformation > 180) {
  car.shapeColor = "red "
 console.log("red");
  }
 if (deformation < 180 && deformation > 100) {
  car .shapeColor = "yellow"
  console.log("yellow");

  }    
 if(deformation < 100) {
  car.shapeColor = "green"
  console.log("green");

   }

  } 

  drawSprites();
}










