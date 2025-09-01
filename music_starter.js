
let sunY =100
let sunSize;
let bgcol
let moonSize;
let moonY =60

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  frameRate(5);

  background(48, 25, 52	,bgcol)//bgcol goes here
  moonSize= map(drum, 0, 100, 50, 100)
  bgCol = map(0, 100, 100, 255)

fill(72, 50, 72)
rect(0, 300, 1589,); //Sea

fill(216, 191, 216)
circle(700,moonSize,moonY)//Moon


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