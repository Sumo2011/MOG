var player1,AIPLAY,track
var finish_line
var VS
//main characters

function preLoad(){
var carIMG=createImage("/assests/car1.png")
player1.addImage(carIMG,"lol")

var trackIMG=createImage("/assests/track1.png")
track.addImage(trackIMG,"lllooll")
 VS=loadSound("/assests/vs.mp3")
//resources
}
var play,end
//gamestates
function setup(){

    var canvas=createCanvas(width=640,height=800)
    player1=createSprite(width/69,height/24)
     track=createSprite(windowWidth,windowHeight)
    finish_line=createSprite()
  
}

function draw(){
    background("white")
    
    
    drawSprites()
}