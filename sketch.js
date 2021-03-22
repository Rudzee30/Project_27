
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob,b2,roof,r,r1,startx,b3,r2,b4,b5,r3,r4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	radius= 40;
	startx= 400;
	//Create the Bodies Here.
	roof= new Roof(400,200,400,20)
	bob=new Bob(startx-radius*2,400,25);
	b2= new Bob(startx-radius,400,25);
	b3= new Bob(startx,400,25);
	b4= new Bob(startx+radius,400,25);
	b5= new Bob(startx+radius*2,400,25);
	r= new  Rope(bob.body,roof.body,-radius*2,0);
	r1= new  Rope(b2.body,roof.body,-radius*1,0);
	r2= new  Rope(b3.body,roof.body,0,0);
	r3= new  Rope(b4.body,roof.body,radius*1,0);
	r4= new  Rope(b5.body,roof.body,radius*2,0);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("White");
  r1.dotted_Line();
  r.dotted_Line();
  bob.display();
  b2.display();
  r2.dotted_Line();
  b3.display();
  r3.dotted_Line();
  b4.display();
  r4.dotted_Line();
  b5.display();
  roof.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-85,y:85});
	}
}

