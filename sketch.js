const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,objeto;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options ={
    isStatic:true
  }

  objeto=Bodies.circle(200,200,20,options);
  World.add(world,objeto);
  console.log(objeto);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine) ;
   ellipse (objeto.position.x,objeto.position.y,20);
}