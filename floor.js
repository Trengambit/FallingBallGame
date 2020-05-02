class Floor{

  constructor(w){
    this.x = width/2;
    this.y = height - 20;
    this.w = 200;
    this.h = 40;
    this.speed = 10;
    this.direction = random(-1, 1);
    this.clr = 255;
  }

  show(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
  }

  update(){
// *******************************
    if (this.direction > 0.5){
      this.direction = 1;
    } else {
      this.direction = -1;
    }
// ********************************

    this.x = this.x + this.speed * this.direction;
    this.wall();
  }

  wall(){
    if (this.x + this.w/2 > width || this.x - this.w/2 < 0){
    this.direction = -this.direction;
  }
  }

}
