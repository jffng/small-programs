let furylite;

let theta = 0.0; // start angle at 0
let amplitude = 820.0; // height of the bounce
let period = 100; // pixels before wave repeats
let y = 0;
let x = 0;

let a = 0.1;
let b = 0;
let c = 0;

function setup(){
  createCanvas(440, 800);
  furylite = loadImage('furylite.jpg');
  background('grey');
  console.log(canvas.height)
}

function draw(){
  image(furylite, x, calcWave(), 120, 84);
}

function calcWave() {
  x += .5;

  if (y >= height){
    b -= 50;
    c += 50;
  }

  y = ( x + b ) ** 2 + c

  return y
}
