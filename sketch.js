
let bertha;
let ponyPic;
let rainbowPic;
let ponies = [];
let howManyPonies = 200;
let whichPony = 0;
let vid;
let playing = false;
let angle = 0.0;
let jitter = 0.0;
let mouseBoxx;
let mouseBoxy;
let bg;

function setup(){
  createCanvas(1810, 900);
  ponyPic = loadImage('assets/pony.png');
  rainbowPic = loadImage('assets/rainbow.png');
  vid = createVideo(['assets/AIDANCING.mp4']);
 // bg = createVideo(['assets/AIDANCING.mp4']);
  for (let i = 0; i < howManyPonies; i++){
  ponies[i] = new Pony();
  vid.play
  vid.loop();
  vid.hide();
  button = createButton('play');
  button.mousePressed(toggleVid);
 // stroke(0, 0, 0, 15);

  }


function toggleVid() {
  if (playing) {
    vid.pause();
    button.html('play');
  } else {
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
}

}
function draw(){
     //background(bg);
   if (second() % 2 === 0) {
    jitter = random(-0.1, 0.1);
      }
  //increase the angle value using the most recent jitter value
  angle = angle + jitter;
  //use cosine to get a smooth CW and CCW motion when not jittering
  let c = cos(angle);
  //move the shape to the center of the canvas
  translate(width / 2, height / 2);
  //apply the final rotation
  rotate(c*30);
  image(vid, 0, 0, 180, 180);
  //camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);


  image(vid, 1810, 900);
  image(vid, 100, 900, 50, 80);
  noCursor();
  for (let i = 0; i < howManyPonies; i++){
    ponies[i].move();
    ponies[i].display();
  }
  image(vid, mouseBoxx, mouseBoxy, 50, 80);
}

function mousePressed(){
  mouseBoxx = mouseX;
  mouseBoxy = mouseY;
  ponies[whichPony].teleportPony(mouseX, mouseY);
  ponies[whichPony].makePonyVisible();
  whichPony++;
  whichPony = whichPony % howManyPonies;

}
class Pony {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(0,1);
    this.yspeed = random(0,1);
    this.visible = false;
  }
  display(){
    if (this.visible){
            imageMode(CENTER);

    image(vid, this.x, this.y, 750, 205);
    }
  }
  move(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if ((this.x > width) || (this.x < 0)) {
      this.xspeed = this.xspeed * -1;
    }

    if ((this.y > height) || (this.y < 0)) {
      this.yspeed = this.yspeed * -1;
    }

    // if((this.x > mouseBoxx && this.x < (mouseBoxx + 50))&&(this.y > mouseBoxy && this.y < (mouseBoxy + 50))){
    //   this.xspeed = this.xspeed + 50;
    //   this.yspeed = this.yspeed + 50;
    // }

  }
  teleportPony(xLoc, yLoc){
    this.x = xLoc;
    this.y = yLoc;
  }
  makePonyVisible(){
    this.visible = true;
  }

}