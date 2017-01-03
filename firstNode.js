var http = require('http');
var fs = require('fs');

fs.readFile('index.html', 'utf8', function(err, data){
  if (err) {
    return console.log(err);
  };
  var server = http.createServer(function(req, res){
    console.log(res);
    res.writeHead(200);
    res.end(data);
  });
  server.listen(8080);
});
