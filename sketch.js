const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var supe;
var bg;
var ground;
var bs1;

var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
function preload() {
//preload the images here
bg= loadImage("sky.jpg")

}

function setup() {
  createCanvas(1150, 550);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  supe = new Super(430,20, 277,85);
  ground = new Ground(450,450,900,5);
  bs1= new Bs(780,330,300,300);


  box= new Ob(500,400,50,50);
  box1 = new Ob(550,400,50,50)
  box2= new Ob(600,400,50,50)

  box3 = new Ob(600,350,50,50)
  box4 = new Ob(500,350,50,50)
  box5 = new Ob(550,350,50,50)

  box6 = new Ob(600,300,50,50)
  box7 = new Ob(550,300,50,50)
  box8= new Ob(500,300,50,50)

  box9= new Ob(600,250,50,50)
  box10= new Ob(500,250,50,50)
  box11= new Ob(550,250,50,50)

  box12= new Ob(500,200,50,50);
  box13 = new Ob(550,200,50,50)
  box14= new Ob(600,200,50,50)

  box15= new Ob(600,150,50,50)
  box16= new Ob(500,150,50,50)
  box17= new Ob(550,150,50,50)

  box18= new Ob(600,100,50,50)
  box19= new Ob(550,100,50,50)
  box20= new Ob(500,100,50,50)

  box21= new Ob(600,50,50,50)
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  
  ground.display();
  bs1.display();
  supe.show();
  box.display();
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
  
}

