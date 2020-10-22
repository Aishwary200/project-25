
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;



function setup() {
	createCanvas(1600, 700);

      
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper = new Paper(200,450,140);
	ground=new Ground(width/2,670,width,20);
	
    dustbin = new Dustbin(1000,450,300,200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  ground.display();
  dustbin.display();
  
  //keyPressed();
  //drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1000}); } 
  }
   


