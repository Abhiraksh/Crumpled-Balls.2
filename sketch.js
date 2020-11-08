
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1, dust2, dust3, ground;
var paper1, groundBody;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundBody = Bodies.rectangle(800,390,1600,10,{isStatic:true});
    World.add(world,groundBody);

	dust1 = new Dustbin(1400,335,20,100);
	dust2 = new Dustbin(1290,375,200,20);
	dust3 = new Dustbin(1200,335,20,100);
	paper1 = new Paper(300,50,30)
	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  dust1.visible();
  dust2.visible();
  dust3.visible();
  paper1.show();
  rect(groundBody.position.x,groundBody.position.y,1600,10);

  if(keyDown(UP_ARROW)){
	  UpArrow();
  }
  drawSprites();
 
}

function UpArrow(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45});
		}
}

