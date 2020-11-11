console.log('node.JS is up and running');

let express = require("express");

let socket = require("socket.io");

//start server

let app = express();

let port = 3000;

let server = app.listen(port);

app.use(express.static('public'));

//start input/output

let io = socket(server);

io.on("connection", newConnection);

function newConnection(socket){
  console.log("new connection: " + socket.client.id);

  socket.on('mouseMoved', mouseMessage);

  function mouseMessage(dataReceived){
    console.log(dataReceived);
  }
}
