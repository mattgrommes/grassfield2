function Grass() {

  this.x = 0;
  this.y = 0;
  this.topPoint = 20;

  this.height = 40;

  this.waveAmt = 1

  this.greens = ['#4dff4d', '#33ff33', '#00ff00', '#00cc00', '#009900']

  this.color = this.greens[this.greens.length * Math.random() | 0]

  this.show = function() {
    stroke(this.color)
    strokeWeight(1)

    var xNorm = map(this.x, 0, 1400, 1, 10);
    if(xNorm > 7) {
      this.topPoint = random(-30,30);
    }
    else if(xNorm > 4) {
      this.topPoint = random(-20,20);
    }
    else if(xNorm > 1) {
      this.topPoint = random(-30,30);
    }

    console.log("T: "+this.topPoint)
    console.log("H: "+this.height)
    noFill();
    push();
    translate(this.x, this.y)
    bezier(0, 0, 0,     // 1st anchor
           0, 0, this.height,   // 1st control
           0, 0, this.height + 10,    // 2nd control
           this.topPoint, 0, this.height + 20)    // 2nd anchor
    pop();
  }

  this.wave = function() {
    this.topPoint += random(-this.waveAmt, this.waveAmt);
  }

}