class Ball{

  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.gravity = 1;
    this.velocity = 0;
    this.gap = 25;

  }

  show(){
    fill(0);
    stroke(255);
    circle(this.x, this.y, this.r)
  }

  falling(){
    this.velocity += this.gravity;
    this.y += this.velocity;
  }

 // if you miss
  removing(){
    if (this.y - this.r/2 > height){;
      balls.shift();
      hp --;
    }
  }
// if you hit
  hits(floor){
    if (this.y + this.r/2 + this.gap > floor.y){
      if(this.x - this.r/2 < floor.x + floor.w/2 && this.x + this.r/2 > floor.x - floor.w/2)
      return true;
    }
  }



// remove from the array after collision with floor or power
  rebounce(){
  balls.shift();
  }

}
