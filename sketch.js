
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	paper = new Paper(400,350,40);
	dustbin = new Dustbin(600,650);
	

	
  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(	paper.body,paper.body.position,{x:15,y:-55})
	}
}



