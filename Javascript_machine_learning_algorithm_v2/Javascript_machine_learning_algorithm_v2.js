var maxNum = 255;
var minNum = 0;
var currNum;
var dataGenerations = 0;
var targetNum = 127; // not used in the processing of the algorithm. used to train the algorithm

function setup() {
  createCanvas(300,500);
  currNum = floor(random(minNum, maxNum));
  frameRate(1);
}

function draw() {
  if (currNum < targetNum) // these two if statements train the algorithm
  {
    minNum = currNum + 1;
    currNum = floor(random(minNum, maxNum));
  }
  else if (currNum > targetNum)
  {
    maxNum = currNum - 1;
    currNum = floor(random(minNum, maxNum));
  }
  show();
  if (currNum != targetNum)
  {
    dataGenerations++;
  }
}

function show() // all this doesn't really relate to the algorithm, it just prints the data
{
  background(255);
  fill(currNum);
  rect(1,1,50,50);
  fill(0);
  text("Number: "+currNum,1,70);
  text("Minimum number for range: "+minNum,1,82);
  text("Maximum number for range: "+maxNum,1,94);
  text("Number of data generations: "+dataGenerations, 1,106);
  
  text("This machine learning algorithm gets ",1,130); // this whole part doesn't really matter
  text("more precise in the generation of a number.",1,142);
  text("The number is represented by the number",1,154);
  text("above and the shade in the rectangle.",1,166);
  text("The variables can be changed to match ",1,178);
  text("any need for generating numbers in a ",1,190);
  text("range.",1, 202);
}
