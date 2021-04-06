const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function Preload(){



}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20);

    ball = new Ball(600,300);

    box = new Box(700,370,30,50);
    box1 = new Box(730,370,30,50);
    box2 = new Box(760,370,30,50);
    box3 = new Box(670,370,30,50);
    box4 = new Box(640,370,30,50);
    box5 = new Box(645,345,30,50);
    box6 = new Box(675,345,30,50);
    box7 = new Box(695,345,30,50);
    box8 = new Box(725,345,30,50);
    box9 = new Box(650,320,30,50);
    box10 = new Box(675,320,30,50);
    box11 = new Box(695,320,30,50);

    sling = new SlingShot(ball.body , {x : 550 , y : 100});

}

function draw(){
    
    background("black");
    Engine.update(engine);

    ground.display();

    ball.display();

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

    sling.display();
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x : mouseX , y : mouseY});
}