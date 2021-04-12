
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	
	bob1 = new Bob(300,500,90)
	bob2 = new Bob(390,500,90)
	bob3 = new Bob(480,500,90)
	bob4 = new Bob(570,500,90)
	bob5 = new Bob(660,500,90)


	ground = new Ground(500,200,540,20)

	rope1 = new Rope(bob1.body,ground.body,-100*2,0)
	rope2 = new Rope(bob2.body,ground.body,-55*2,0)
	rope3 = new Rope(bob3.body,ground.body,-10*2,0)
	rope4 = new Rope(bob4.body,ground.body,35*2,0)
	rope5 = new Rope(bob5.body,ground.body,80*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine)
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()

	ground.display()

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

keyPressed();
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-90,y:0}); 
		} 
	
}



