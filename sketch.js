const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground;
var ground1;
var box1,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var box2 , box3 , box4 , box5 ,box6 ,box7, box8 ,box9,box10,box46;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box12;
var box32,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;





function setup() {

  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  
  //createSprite(400, 200, 50, 50);

  ground = new Ground(500,height,200,60);
  

  ground1 = new Ground(1000,300,200,30);

  box1 = new Box(420,340,20,50);
  box2 = new Box(440,340,20,50);
  box3 = new Box(460,340,20,50);
  box4 = new Box(480,340,20,50);
  box5 = new Box(500,340,20,50);
  box6 = new Box(520,340,20,50);
  box7 = new Box(540,340,20,50);
  box8 = new Box(560,340,20,50);
  box9 = new Box(580,340,20,50);
  
  box10 = new Box(440,200,20,50);
  box11 = new Box(460,200,20,50);
  box12 = new Box(480,200,20,50);
  box13 = new Box(500,200,20,50);
  box14 = new Box(520,200,20,50);
  box15 = new Box(540,200,20,50);
  box16 = new Box(560,200,20,50);

  box17 = new Box(460,100,20,50);
  box18 = new Box(480,100,20,50);
  box19 = new Box(500,100,20,50);
  box20 = new Box(520,100,20,50);
  box21 = new Box(540,100,20,50);

  box43 = new Box(480,60,20,50);
  box44 = new Box(500,60,20,50);
  box45 = new Box(520,60,20,50);

  box46  =new Box(500,20,20,50);

  box22 = new Box(940,60,20,50);
  box23 = new Box(960,60,20,50);
  box24 = new Box(980,60,20,50);
  box25 = new Box(1000,60,20,50);
  box26 = new Box(1020,60,20,50);
  box27 = new Box(1040,60,20,50);
  box28 = new Box(1060,60,20,50);

  box29 = new Box(960,100,20,50);
  box30 = new Box(980,100,20,50);
  box31 = new Box(1000,100,20,50);
  box32 = new Box(1020,100,20,50);
  box33 = new Box(1040,100,20,50);
  box34 = new Box(1060,100,20,50);
  box35 = new Box(1080,100,20,50);

  box36 = new Box(980,140,20,50);
  box37 = new Box(1000,140,20,50);
  box38 = new Box(1020,140,20,50);
  box39 = new Box(1040,140,20,50);

  box40 = new Box(1000,180,20,50);
  box41 = new Box(1020,180,20,50);

  box42 = new Box(1020,220,20,50);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});






}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  //ground.display(); 
  ground.display();
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  polygon.display();
  slingShot.display();
  




  drawSprites();
}

function keyPressed(){
  if(keyCode===32){

    slingshot.attach(this.polygon); 
  }
}