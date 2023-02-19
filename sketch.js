

var forest,forestImg
//var boy,boy_running
//var skeleton,skeleton_running
gameState="play"

function preload(){
forest = loadImage("darkforest.png")
//boy_running=loadAnimation("boy1.png","boy2.png")

}

function setup() {
createCanvas(600,400)
forest=createSprite(300,200)
forest.addImage("forest",forestImg)
//forest.x =forest.width/2;
//forest.velocityX=-4
//boy=createSprite()
//boy.addAnimation("running",boy_running)
}

function draw() {
    background(0)
    
    if (gameState==="play"){
    forest.velocityX=-4
        if (forest.x < 0){
        forest.x = forest.width/2;
      }
       
      drawSprites()
    }
    
  }
//function reset(){
 // gameState="play"
//}

