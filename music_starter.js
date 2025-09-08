
let sunY =100
let sunSize;
let bgcol
let moonSize;
let moonY =60
let firstRun = true;
let myImage;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  if (firstRun){

  myImage =loadImage('gloriaSprite.png')
  firstRun = false;

}
  
  frameRate(5);

  background(66,68,113,bgcol)//bgcol goes here
  moonSize= map(drum, 0, 100, 50, 100)
  bgCol = map(0, 100, 100, 255)

fill(104,106,138)
rect(0, 350, 1589,)//sky

fill(91,92,120) //Mountain colours
triangle(0, 1000, 200, 40,806, 600); //mountain 2
triangle(-95, 500, -108, 70, 536, 500); //mountain 1

fill(112,120,91)
rect(0, 450, 1589,); //grass patch


fill(216, 191, 216)
circle(700,moonSize,moonY)//Moon




image(myImage, 400, 400);


//fill(66, 135, 245) //blue
  //ellipse (300, sunY, sunSize)
  //sunY = sunY +1


  //for(var i= 1; i< 6 ;i++){
 //var circleStep =i=800
 //ellipse (1000, sunY+(150*i), sunSize) //circleStep
 //sunY = sunY +1

  }

  if(sunY >1000) {
sunY=0
   
  }
 

//}