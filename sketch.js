var canvas
var gamestate=0

function setup(){
    canvas=createCanvas(displayWidth,displayHeight)
    story=new Story()
   
 }
    function draw(){
      if( gamestate===0){
        story.display();
     }
     else if(gamestate===1){
       
     }
     }