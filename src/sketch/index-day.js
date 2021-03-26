function getRandom(min, max) {  
  return Math.random() * (max - min) + min;
}

let cloud1, cloud2, cloud3, cloud4;
let sun;

let x1, x2, x3, x4;
let y1, y2, y3, y4;

function setup() {
  createCanvas(850, 400);
  x1 = 60, x2 = 100, x3 = 100, x4 = 140;
  y1 = 80, y2 = 75, y3 = 100, y4 = 80;
  
  sun = new Sun(650, 40, 90, 90, '#FFFF00');
}

function draw() {
  background(184, 236, 255);
  
  noStroke();
  ellipse(x1, y1, 80, 80);
  ellipse(x2, y2, 80, 80);
  ellipse(x3, y3, 80, 80);
  ellipse(x4, y4, 80, 80);
  
  x1 = x1 + 1;
  y1 = y1 + random(1, -1);
  
  if (x1 < 0) {
    x1 = height;
  }
  
  x2 = x2 + 1;
  y2 = y2 + random(1, -1);
  
  if (x2 < 0) {
    x2 = height;
  }
  
  x3 = x3 + 1;
  y3 = y3 + random(1, -1);
  
  if (x3 < 0) {
    x3 = height;
  }
  
  x4 = x4 + 1;
  y4 = y4 + random(1, -1);
  
  if (x4 < 0) {
    x4 = height;
  }

  sun.render();
}

class Sun {
  constructor(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height, height;
    this.color = color;
  }
  
  changeColor(color){
    fill((color));
    this.render()
  }
  render(){
    fill(this.color);
    ellipse(this.x , this.y, this.width, this.height, this.color);
    fill(255, 255, 255);
  }
} 