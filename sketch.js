function setup() {
  createCanvas(500, 400);
  gameSoundtrack.loop();
}

function draw() {
  background(freewayImage);
  displayPlayer();
  displayCars();
  carMovement();
  playerMovement();
  carResetPosition();
  hitCheck();
  displayScore();
  pointMade();
  
  
}





