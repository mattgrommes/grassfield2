// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));
app.use(express.static('node_modules/p5/lib'));
app.use(express.static('node_modules/p5/lib/addons'));
app.use(express.static('node_modules/ccapture.js/build/CCapture.all.min.js'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
