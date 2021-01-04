var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	box1=createSprite(300,610,20,100);
	box1.shapeColor=color(255, 0, 0);
	box2=createSprite(500,610,20,100);
	box2.shapeColor=color(255, 0, 0);
	box3=createSprite(400,650,200,20);
	box3.shapeColor=color(255, 0, 0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	

	engine = Engine.create();
	world = engine.world;

	

	box1 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	 World.add(world,box1);
	 box2 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	 World.add(world,box2);
	 box3 = Bodies.rectangle(400, 650,200, 20 , {isStatic:true} );
	 World.add(world,box3);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {

}



