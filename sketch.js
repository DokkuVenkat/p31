const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var maxDrops=100;
var drops=[]
function preload(){
    
}

function setup(){
   createCanvas(400,700)
   engine = Engine.create();
   world = engine.world;
if(frameCount%150===0){
    for(var i=0;i<maxDrops;i=i+1){
drops.push(new Drops(random(0,400),random(0,400)))
    }

}
}

function draw(){
    background(0)
    Engine.update(engine)
    for(var i=0;i<maxDrops;i=i+1){
        drops[i].display()
        drops[i].updateY()
            }

}   

