const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var poly1;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31;
var engine,world;
function setup() {
  createCanvas(800,800);
   engine = Engine.create()
   world = engine.world;
   poly1 = new Poly(100,400);
   ground1 = new Ground(337,708,300,5);
   ground2 = new Ground(600,450,300,5);
   block1 = new Square(490,431,30,30,"red");
   block2 = new Square(520,431,30,30,"red");
   block3 = new Square(550,431,30,30,"red");
   block4 = new Square(580,431,30,30,"red");
   block5 = new Square(610,431,30,30,"red");
   block6 = new Square(640,431,30,30,"red");
   block7 = new Square(670,431,30,30,"red");
   block8 = new Square(700,431,30,30,"red");
   block9 = new Square(520,401,30,30,"red");
   block10 = new Square(550,401,30,30,"red");
   block11 = new Square(580,401,30,30,"red");
   block12 = new Square(610,401,30,30,"red");
   block13 = new Square(640,401,30,30,"red");
   block14 = new Square(670,401,30,30,"red");
   block15 = new Square(550,371,30,30);
   block16 = new Square(580,371,30,30);
   block17 = new Square(610,371,30,30);    
   block18 = new Square(640,371,30,30);
   block19 = new Square(580,341,30,30);
   block20 = new Square(610,341,30,30);
   block21 = new Square(594,311,30,30);

   block22 = new Square(230,690,30,30);
   block23 = new Square(260,690,30,30);
   block24 = new Square(290,690,30,30);
   block25 = new Square(320,690,30,30);
   block26 = new Square(350,690,30,30);
   block27 = new Square(380,690,30,30);
   block28 = new Square(410,690,30,30);
   block29 = new Square(440,690,30,30);
   block30 = new Square(470,690,30,30);
   block31 = new Square(500,690,30,30);
   Engine.run(engine);
  
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("pink");  
  poly1.display();
  ground1.display();
  ground2.display();
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
  fill("pink")
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY);
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
