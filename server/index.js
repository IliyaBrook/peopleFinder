const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
io = require('socket.io')(server)
require('./socket/socket')(io)



const config = require("./config.json");
const mongoose = require("mongoose");
const path = require("path");

const port = process.env.PORT || config.port;
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.resolve("../build", "index.js")));
  app.use("/", (req, res) => {
    res.sendfile(path.resolve("../build", "index.js"));
  });
}

try {
  async function start() {
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    server.listen(port, () => {
      console.log(`Server start at http://localhost:${port}`);
    });
    await mongoose.connect(config.mongoServ).then(() => {
      console.log("mongoDB connected");
    })
      .catch(error => {
        console.log("MongoDb Error: ", error);
      });
  }

  start().catch(error => console.log("Unable to Start the Server error: ", error));
} catch (errors) {
  console.error(errors);
  console.log(errors);
}
