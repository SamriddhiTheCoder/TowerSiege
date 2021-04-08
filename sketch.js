const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var shooter;

function preload(){
    shooter = loadImage('shooter.png');
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

    //flying box
    polygon = Bodies.circle(100, 250, 40);
    World.add(world, polygon);

    //chain
    rope = new SlingShot(this.polygon, {x:100, y:200});

    //ground
	ground = new Ground(500, 580, 1000, 20);

    //line 1
    box = new Box(590, 540, 60, 60);
    box1 = new Box(650, 540, 60, 60);
    box2 = new Box(710, 540, 60, 60);
    box3 = new Box(770, 540, 60, 60);
    box4 = new Box(830, 540, 60, 60);
    box5 = new Box(890, 540, 60, 60);

    //line 2
    box6 = new Box(620, 480, 60, 60);
    box7 = new Box(680, 480, 60, 60);
    box8 = new Box(740, 480, 60, 60);
    box9 = new Box(800, 480, 60, 60);
    box10 = new Box(860, 480, 60, 60);

    //line 3
    box11 = new Box(650, 420, 60, 60);
    box12 = new Box(710, 420, 60, 60);
    box13 = new Box(770, 420, 60, 60);
    box14 = new Box(830, 420, 60, 60);

    //line 4
    box15 = new Box(680, 360, 60, 60);
    box16 = new Box(740, 360, 60, 60);
    box17 = new Box(800, 360, 60, 60);

    //line 5
    box18 = new Box(710, 300, 60, 60);
    box19 = new Box(770, 300, 60, 60);

    //line 6
    box20 = new Box(740, 240, 60, 60);

	Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    imageMode(CENTER);
    background(0);

    image(shooter, polygon.position.x, polygon.position.y, 110, 110);

    ground.display();

    rope.display();

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
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}
