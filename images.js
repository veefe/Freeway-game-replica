//Game images
let freewayImage
let playerImage
let carGreenImage
let carBlackImage
let carYellowImage

//images stage load
function preload() {
  freewayImage = loadImage("images/estrada.png");
  playerImage = loadImage("images/ator-1.png");
  carGreenImage = loadImage("images/carro-1.png");
  carBlackImage = loadImage("images/carro-2.png");
  carYellowImage = loadImage("images/carro-3.png");
  carsImage = [carGreenImage, carBlackImage, carYellowImage, carBlackImage, carGreenImage, carYellowImage];
}