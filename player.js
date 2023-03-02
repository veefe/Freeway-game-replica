//Player
let xPlayerPosition = 100;
let yPlayerPosition = 366;
let widthPlayer = 30;
let heightPlayer = 30;
let playerHit = false;
let playerScore = 0;

//Player stage positions
function displayPlayer () {
  image(playerImage, xPlayerPosition, yPlayerPosition, widthPlayer, heightPlayer);
}

//Player movements
function playerMovement () {
  if (keyIsDown(UP_ARROW)) {
    if (keyUpDeadZone()) {
      yPlayerPosition -= 3;
    }
    
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (keyDownDeadZone()) {
      yPlayerPosition += 3;
    }
    
  }
}

function hitCheck () {
  // /collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carsImage.length; i = i + 1){
    playerHit = collideRectCircle(xCarsPosition[i], yCarsPosition[i], carWidth, carHeight, xPlayerPosition, yPlayerPosition, 5)
    if (playerHit) {
      playerResetPosition();
      if (zeroScore()){
          playerScore -= 1;
      }
    }
  }
}

function playerResetPosition(){
  yPlayerPosition = 390;
}

function displayScore(){
  textAlign(CENTER)
  textSize(28)
  fill(255,240,0);
  text(playerScore, width / 5, 28)
}

function pointMade () {
  if (yPlayerPosition < 11) {
    playerScore += 1;
    playerResetPosition();
  }
}

function zeroScore () {
 return playerScore > 0;
}

// lock player in the stage size
function keyDownDeadZone () {
  return yPlayerPosition < 390;
}

function keyUpDeadZone () {
  return yPlayerPosition > 5;
}
