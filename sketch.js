
var cols, rows;
var scl = 20;

var grass = [];
var w, h;
var canvas;
var numBlades = 0;

var capturer = new CCapture({
    framerate: 5,
    format: 'gif', workersPath: ''
});

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  canvas = document.getElementById('defaultCanvas0');
  w = width + 200;
  h = height + 200;

  cols = w / scl;
  rows = h/ scl;
  frameRate(10);
  angleMode(DEGREES);
  // noLoop();

  // setTimeout(startCapture, 2000);

  for (var x = 0; x < w; x+=random(2,6)) {
    for (var y = 0; y < h; y+=random(3,7)) {
      n = noise(y, x);
      rand = random();
      if(rand > 0.96) {
        var g = new Grass();
        g.x = x;
        g.y = y;
        // g.topPoint = y;
        g.height = n * 80;
        grass.push(g)
        numBlades++;
      }
    }
  }

  console.log("Num blades: "+numBlades);
}

function draw() {
  clear();
  background('#00A6FC')

  makeCloud(100, 100);
  makeCloud(400, 150);
  makeCloud(700, 70);
  makeCloud(1000, 200);
  makeCloud(1500, 70);
  makeCloud(1800, 110);

  push();
  translate(-w/2, -h/3);

  pop();

  push();
  rotateX(80);
  translate(-w/2, -h/3);

  stroke('black')
  strokeWeight(5)
  noFill();

  var myx=100, myy=100;

  // myx=500;
  // myy=200;

  // console.log(map(myy, 0, 1000, 1, 10))
  // push();
  // translate(myx, myy)
  // bezier(0, 0, 0,     // 1st anchor
  //        0, 0, 40,   // 1st control
  //        0, 0, 50,    // 2nd control
  //        0, 30, 60)    // 2nd anchor
  // pop();

  // myx=1300;
  // myy=900;

  // push();
  // translate(myx, myy)
  // bezier(0, 0, 0,     // 1st anchor
  //        0, 0, 40,   // 1st control
  //        0, 0, 50,    // 2nd control
  //        -30, 0, 60)    // 2nd anchor
  // pop();

  fill('#47B921')
  strokeWeight(0);
  rect(0, 0, w, h);

  for(var g = 0; g < grass.length; g++) {
    grass[g].show();
    grass[g].wave();
  }
  pop();

}

function startCapture() {
    capturer.start();
    render();
}
function render() {
    capturer.capture(canvas);
    // console.log('Render process: ' + ((rendered_count / total) * 100).toFixed(2) + '%');
    requestAnimationFrame(render);
}

function keyTyped() {
  if (key === 's') {
    capturer.stop();

    // default save, will download automatically a file called {name}.extension (webm/gif/tar)
    capturer.save();
  }
}

function makeCloud(xpos, ypos) {
  push();
  translate(-width/2, -height/2);
  fill(255,255,255, 200);
  strokeWeight(0)
  ellipse(xpos, ypos, 75)
  ellipse(xpos + 10, ypos + 20, 75)
  ellipse(xpos + 20, ypos + 20, 75)
  ellipse(xpos - 15, ypos + 20, 75)
  ellipse(xpos - 30, ypos + 20, 75)
  pop();
}

