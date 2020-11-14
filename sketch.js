const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;

var polygan;
var score=0;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(600,290,1200,20);
  platform=new Ground (400,500,800,400);

  polygan=Bodies.circle(50,200,50);
  World.add(world,polygan);

  slingshot=new Sling(polygan,{x:100,y:200});

  text("Score:",+score,750,40);

  block1=new Box (190,245,30,40);
  block2=new Box (220,245,30,40);
  block3=new Box (250,245,30,40);
  block4=new Box (280,245,30,40);
  block5=new Box (310,245,30,40);
  block6=new Box (200,205,30,40);
  block7=new Box (230,205,30,40);
  block8=new Box (260,205,30,40);
  block9=new Box (290,205,30,40);
  block10=new Box (220,165,30,40);
  block11=new Box(250,165,30,40);
  block12=new Box (280,165,30,40);
  block13=new Box(250,125,30,40);

}

function draw() {
  background(255,255,255);  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  
  ground.display();

  platform.display();
  ellipseMode(CENTER);
  ellipse(polygan.position.x,polygan.position.y,50,50);

  

}

function mouseDragged()
{
   Matter.Body.setPosition(polygan,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}
    
function keyPressed()
{
  if(keyCode===32)
  {
    slingshot.attach(polygan);
  }
}
  async function getbackgroundimage()
{
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson=await response.json();
  var datetime=responsejson.datetime;
  var hour=datetime.slice(11,13);
  if (hour>=06 && hour<=18)
  {
    backgroundImage(random(rgb));
  }
  else
  {
    background(255,255,255); 
  }
}

