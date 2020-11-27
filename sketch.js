
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,r;

function preload()
{
 boyImage = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  boy = createSprite(80,570,10,10);
  boy.addImage(boyImage);
  boy.scale = 0.1;
    ground = new Ground(400,670,800,60);
   plant = new Tree(400,5,450,50);
    rock = new Stone(200,200,100,100);
    mango1 = new Mango(600,250,20,20);
    mango2 = new Mango(610,230,20,20);
    mango3 = new Mango(590,220,20,20);
    mango4 = new Mango(620,200,20,20);
    mango5 = new Mango(625,230,20,20);
    mango6 = new Mango(650,250,20,20);
    slingshot = new SlingShot(rock.body,{x:75,y:500})
	Engine.run(engine);
  
}
function draw() {
  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);
  detectCollision(rock,mango6);
  rectMode(CENTER);
  background(0);
  ground.display();
  rock.display();
  plant.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();
  drawSprites();
}


function detectCollision(Lrock,Lmango){
  mango1BodyPosition = mango1.body.position 
  rockBodyPosition =  rock.body.position
  var distance= dist(rockBodyPosition.x,rockBodyPosition.y, mango1BodyPosition.x,mango1BodyPosition.y)
  if(distance<=mango1.r + rock + r)
  {
    Matter.Body,setStatic(mango1.body.false);
  }
}
