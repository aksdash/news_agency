import express from "express"
import 'dotenv/config'
import ArtilcleRouter from "./router/article.js"
import userRouter from "./router/user.js"


const port = process.env.PORT || 4000
const app  = express()

app.use(express.json());
app.use('/article',ArtilcleRouter)
app.use('/user',userRouter)

app.get('/',(req, res) => {
    res.send("Hello World")
})

app.listen( port, () => {
    console.log(`Server is started at port ${port}`)
})

