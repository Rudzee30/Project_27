
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob,b2,roof,r,r1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,200,400,20)
	bob=new Bob(400,400,45);
	b2= new Bob(445,400,45);
	r= new  Rope(bob.body,roof.body,-bob.radius*2,0);
	r1= new  Rope(b2.body,roof.body,-b2.radius*2,0);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("White");
  roof.display();
  bob.display();
  b2.display();
  r1.dotted_Line();
  r.dotted_Line();
 
}



