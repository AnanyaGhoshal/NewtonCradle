const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(300,400);
	bob2 = new Bob(350,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(500,400);

	roof = new Roof(400,10,800,20);

	rope1 = new Chain(bob1.body,roof.body,-90,10);
	rope2 = new Chain(bob2.body,roof.body,-40,10);
	rope3 = new Chain(bob3.body,roof.body,10,10);
	rope4 = new Chain(bob4.body,roof.body,60,10);
	rope5 = new Chain(bob5.body,roof.body,110,10);

	
  
}


function draw() {
  
  background(200);

  Engine.update(engine);

 
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
}

function keyPressed(){

	if(keyCode===LEFT_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:100});
	}
}







