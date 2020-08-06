var canvas
var gamestate=0

function setup(){
    canvas=createCanvas(displayWidth,displayHeight)
   
 }
    function draw(){
      if( gamestate===0){
        story=new Story()
        story.display();
     }
     }