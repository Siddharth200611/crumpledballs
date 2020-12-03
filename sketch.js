const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a,b,c;
var paperObject;
var ground;
function preload(){
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

paperObject=new Paper(100,350,20,20)
paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, paperBody);
	
	//Create the Bodies Here.
paperObject=createSprite(100,350,20,20)
//paper.shapeColor="pink";
ground=createSprite(350,380,700,20)
a=createSprite(550,360,150,10)
a.shapeColor="red";
b=createSprite(480,315,10,80);
b.shapeColor="red";
c=createSprite(620,315,10,80);
c.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


