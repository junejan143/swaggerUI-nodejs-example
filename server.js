var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('file'));

//================================== routes ====================================
require('./app/routes.js')(app);

//==================  listen (start app with node server.js) ====================
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://localhost:%s", port);
});
