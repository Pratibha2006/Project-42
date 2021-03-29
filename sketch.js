const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var engine, world;
var maxDrops = 200;
var umbrella;

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    
    for(var i = 0; i < maxDrops; i++){
     drops.push(new Drops(random(0,400), random(0,200)));
 }

    umbrella = new Umbrella(200,600);

}

function draw(){
    background(0);
    Engine.update(engine);

   umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

