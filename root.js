const {WebSocketServer} = require("ws")
var robot = require("robotjs");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const wss = new WebSocketServer({port: 8001})

wss.on("connection", function(ws) {
   ws.on("message", async data => {
      data = data.toString()
      data = JSON.parse(data)
      console.log(data) 
      await robot.moveMouse(data.clientX + 10, data.clientY + 40);
      await sleep(200)
      await robot.mouseClick()
   })
})
