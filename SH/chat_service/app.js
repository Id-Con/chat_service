const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src"))); // join은 운영체제마다 경로 표기가 다르기 때문에 사용한다.
const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("연결이 이루어 졌습니다.");
});

app.listen(PORT, () => console.log(`server is running ${PORT}`));
