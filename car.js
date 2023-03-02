
let xCarsPosition = [600, 600, 600, 100, -100, -100];
let yCarsPosition = [40, 96, 150, 210, 263, 318];
let carsSpeed = [4, 5, 4.3, 5.2, 4.5, 6];
let carWidth = 50;
let carHeight = 40;

//Cars stage position
function displayCars () {
  for (let i = 0; i < carsImage.length; i = i + 1) {
     image(carsImage[i], xCarsPosition[i], yCarsPosition[i], carWidth, carHeight); 
  }
}


//Car movements
function carMovement () {
  for (let i = 0; i < carsImage.length; i = i + 1) {
   xCarsPosition[i] = xCarsPosition[i] - carsSpeed[i]; 
  }
}

//Car reset position
function carResetPosition () {
  for (let i = 0; i < carsImage.length; i++) {
     if (borderCross(xCarsPosition[i])) {
    xCarsPosition[i] = 600; 
    }
  }
}

function borderCross (xCarsPosition) {
  return xCarsPosition < -50;
}