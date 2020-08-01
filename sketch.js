
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,500);
	ground= new Ground(400,695,800,10);
	dustbin1= new Dustbin(400,690,100,10);
	dustbin2= new Dustbin(345,630,10,100);
	dustbin3= new Dustbin(455,630,10,100);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
 
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-25});
	}
}

