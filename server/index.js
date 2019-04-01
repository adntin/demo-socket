var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(8000);

console.log(__dirname);

function handler(req, res) {
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on("connection", function(socket) {
  // io.emit("this", { will: "be received by everyone" });
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });

  // socket.on("disconnect", function() {
  //   io.emit("user disconnected");
  // });
});

// const server = require("http").createServer();
// const io = require("socket.io")(server, {
//   serveClient: false,
//   wsEngine: "ws" // uws is not supported since it is a native module
// });
// const port = process.env.PORT || 4000;

// io.on("connect", onConnect);
// server.listen(port, () => console.log("server listening on port " + port));

// function onConnect(socket) {
//   console.log("connect " + socket.id);

//   socket.on("disconnect", () => console.log("disconnect " + socket.id));
// }
