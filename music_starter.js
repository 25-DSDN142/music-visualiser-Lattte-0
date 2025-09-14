
//let starY =100
//let starSize;
let bgcol
let moonSize;
let moonY =60
let firstRun = true;
let Gloria;
let gloriaWish;
let gloriaY = 400
let Blanket;
let miniorOne;
let pokemonS;
let miniorTwo;
let miniorThree;
let grassPatch;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  if (firstRun){

  Gloria= loadImage('wishingGloria.PNG');
  Blanket= loadImage('Picnic.png');
  miniorOne= loadImage('minior PU.png')
  pokemonS= loadImage('pkmSprites.png')
  miniorTwo= loadImage('minior B.png')
  miniorThree= loadImage('Minior PI.png')
  grassPatch= loadImage('UntitledArtwork1.png')
  firstRun = false;

}
  
  frameRate(10);

  background(66,68,113,bgcol)//bgcol goes here
  gloriaWish= map(vocal, 0,350,420,320)
  moonSize= map(drum, 0, 100, 50, 100)
  //starSize= map(drum, 0, 100, 50, 100)
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
fill(230, 209, 230)
circle(700,moonSize,moonY) // Moon shadow


image(miniorOne,500,20)// Purple Minior
image(miniorTwo,350,50) //Blue Minior
image(miniorThree, 470,100) //Pink Minior
image(grassPatch,0,50)
image(Blanket,350,450) //Picnic Blanket and grass
image(pokemonS, gloriaWish, 480) // The pokemon with Gloria (Cleffa and Hatenna)
image(Gloria, gloriaWish, gloriaY, width/9, height/6 ); //Gloria code


//fill(66, 135, 245) //blue
  //ellipse (300, sunY, sunSize)
  //sunY = sunY +1


  //for(var i= 1; i< 6 ;i++){
 //var circleStep =i=800
 //ellipse (1000, sunY+(150*i), sunSize) //circleStep
 //sunY = sunY +1

  }

  //if(sunY >1000) {
//sunY=0
   
 // }
 

//}