var surfer, surfer_running, track, infiniteTrack,invisibleBoundary1,invisibleBoundary2;
function preload(){
  //pre-load images
  surfer_running= loadAnimation("Runner-1.png","Runner-2.png");
  infiniteTrack= loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track= createSprite(200,200,600,20);
  track.addImage(infiniteTrack);

  surfer= createSprite(200,200,20,80);
  surfer.addAnimation("running",surfer_running);
  surfer.scale=0.1;

  invisibleBoundary1= createSprite(350,200,20,600);
  invisibleBoundary1.visible= false;
  invisibleBoundary2= createSprite(55,200,20,600);
  invisibleBoundary2.visible= false;

}

function draw() {
  background(0);
  
  track.velocityY= 4;
  if(track.y>400){
    track.y= height/2;
  }
  
  surfer.x=World.mouseX;

  surfer.collide(invisibleBoundary1);
  surfer.collide(invisibleBoundary2);

  drawSprites();
}
