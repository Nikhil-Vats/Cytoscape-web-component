var express = require('express');
var serveStatic = require('serve-static');
var port = 3452;

var app = express();

app.use(serveStatic('./', {
  'index': ['index.html']
}));
app.listen(port);

console.log("Listening on port " + port);
console.log("Visit http://localhost:" +
  port +
  " to view your test application");
