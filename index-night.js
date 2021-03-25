function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
let largura = window.innerWidth;
let altura = window.innerHeight;


let star1, star2, star3, star4, star5, star6, star7;
let moon;


let x, y;

function setup() {
  createCanvas(720, 400);
  x = 250;
  y = 290;

  star1 = new Star1(80, 40, 7, 7);
  star2 = new Star2(125, 85, 7, 7);
  star3 = new Star3(200, 50, 7, 7);
  star4 = new Star4(290, 70, 7, 7);
  star5 = new Star5(400, 45, 7, 7);
  star6 = new Star6(470, 80, 7, 7);
  star7 = new Star7(520, 35, 7, 7);
  moon = new Moon(360, 120, 90, 90, 200);
}

function draw() {
  background(0);

  stroke(50);
  ellipse(x, y, 39, 82);

  x = x + random(-1, 1);
  y = y - 1;

  if (y < 0) {
    y = height;
  }

  star1.render(), star1.shiny();
  star2.render(), star2.shiny();
  star3.render(), star3.shiny();
  star4.render(), star4.shiny();
  star5.render(), star5.shiny();
  star6.render(), star6.shiny();
  star7.render(), star7.shiny();
  moon.render();
}

class Star1 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Star2 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Star3 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Star4 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Star5 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Star6 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Star7 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  shiny() {
    noStroke();
    this.width = getRandom(5, 15);
    this.height = this.width;
  }

  render() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Moon {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

  }

  changeColor(color) {
    fill(color);
    this.render();
  }

  render() {
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height, this.color);
    fill(255);
  }
}