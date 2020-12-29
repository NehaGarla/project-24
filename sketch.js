
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,600,10);

	ground = new Ground(400, 680, 800, 20);
  
	 wall1 = new Dustbin(550, 620, 20, 100);
     wall2 = new Dustbin(635, 660, 150, 20);
	 wall3 = new Dustbin(720, 620, 20, 100);
	 
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  }

