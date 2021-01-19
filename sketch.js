const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine;
var world;
var BG;
var bAllon;
var ballonImage;
var dataBase;
var position;
function preload() {
  //preload the images here
  BG = loadImage("Hot Air Ballon-01.png");
  ballonImage = loadImage("Hot Air Ballon-02.png")
  }
  
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    
    database = firebase.database();
    bAllon = createSprite(400,200,100,200);
    bAllon.addImage(ballonImage)
    var bAllonPosition = database.ref("ballon/position")
    bAllonPosition.on("value", readposition, showerror)  


  
}

function draw() {
  background(BG);  
 
  Engine.update(engine)

if(keyDown(LEFT_ARROW)){
  bAllon.x = bAllon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  bAllon.x = bAllon.x +10;
}
else if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
  bAllon.addAnimation("Hot Air Ballon-01", ballonImage2);
  bAllon.y = bAllon.y -10;
}
else if(keyDown(DOWN_ARROW)){
  bAllon.y = bAllon.y +10;
}
drawSprites();
}

//function writePosition(x,y){
//dataBase.ref("bAllon/position").set({
//x: position.x + x,
//y: position.y + y
//})
//}
function updateHeight(x,y){
 database.ref('ballon/position').set({
   'x': height.x + x,
   'y': height.y + y 
 })

}
function readposition(data){
position = data.val();
//bAllon.x = position.x
//bAllon.y = position.y
}
function showerror(){
console.log("error in reading the data base")
}
