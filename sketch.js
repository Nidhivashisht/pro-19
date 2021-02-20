var girl,girlImage;
var road, roadImage;
var car,carImage,carG;
var cash,cashImage,cashG;
var treasureCollection=0;
var diamond,diamondImage,diamondG;
var truck,truckImage,truckG;


function preload(){
roadImage=loadImage("3r.jfif");
  girlImage=loadImage("girl.jpg");
  carImage=loadImage("y.jpg");
  cashImage=loadImage("cash.jpg");
  diamondImage=loadImage("d.jpg");
  truckImage=loadImage("d2.jpg");
}

function setup() {
 createCanvas(400,600);
  road=createSprite(200,200,50,50);
  road.addImage(roadImage);
  road.velocityY=4;
  road.scale=3;
  
  girl=createSprite(70,530);
  girl.addImage(girlImage);
  girl.scale=0.1;
  
  carG=new Group();
  cashG=new Group();
 truckG=new Group();
  diamondG=new Group();
}



function draw() {
 background("red");
  
   girl.x = World.mouseX;
  
  if(carG.isTouching(girl)){
    car.velocityY=0;
    girl.velocityY=0;
  }
  
  if(truckG.isTouching(girl)){
    truck.velocityY=0;
    girl.velocityY=0;
  }
  
  
  
  
    if (cashG.isTouching(girl)) {
      treasureCollection=treasureCollection+50; }
  
   if (diamondG.isTouching(girl)) {
      treasureCollection=treasureCollection+100;
    
    }
 
   if(road.y > height ){
    road.y = height/2;
  }
  
  
  
  createCar();
  createcash();
  createtruck();
  createDiamond();
  
  drawSprites();
  
   textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
}

function createCar() {
  if (World.frameCount % 200 == 0) {
  var car = createSprite(Math.round(random(50, 350),40, 10, 10));
  car.addImage(carImage);
  car.scale=0.2;
  car.velocityY = 5;
  carG.add(car);
  }
}


function createcash() {
  if (World.frameCount % 320 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImage);
  cash.scale=0.2;
    cash.velocityY =3;
  cashG.add(cash);
     cash.lifetime = 150;
}
}


function createDiamond() {
  if (World.frameCount % 320 == 0) {
  var diamond = createSprite(Math.round(random(50,width-50),40, 10, 10));
  diamond.addImage(diamondImage);
  diamond.scale=0.1;
  diamond.velocityY = 3;
  diamond.lifetime = 150;
  diamondG.add(diamond);
}
}


function createtruck() {
  if (World.frameCount % 410 == 0) {
  var truck = createSprite(Math.round(random(50,width-50),40, 10, 10));
  truck.addImage(truckImage);
  truck.scale=0.3;
  truck.velocityY = 3;
  truck.lifetime = 150;
  truckG.add(truck);
  }
}


