import express from "express"
import cors from 'cors'
import 'dotenv/config'
import ArtilcleRouter from "./router/article.js"
import userRouter from "./router/user.js"
import http from "http"
import { Server } from "socket.io"
import { IOHandler } from "./socketio/handler.js";
import path from "path";

const port = process.env.PORT || 4000
const app  = express()
const httpServer = http.createServer(app)

const io = new Server(httpServer, {
    cors : {
        origin : "*"
    }
});

IOHandler(io)

app.use(express.json());
app.use(cors())
app.use('/article',ArtilcleRouter)
app.use('/user',userRouter)

app.get('/',(req, res) => {
    res.send("Hello World")
})

// app.listen( port, () => {
//     console.log(`Server is started at port ${port}`)
// })

httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} `)
})




