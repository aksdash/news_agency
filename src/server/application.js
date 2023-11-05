import express from "express"
import 'dotenv/config'
import ArtilcleRouter from "./router/article.js"

const port = process.env.PORT || 4000
const app  = express()
app.use('/article',ArtilcleRouter)

app.get('/',(req, res) => {
    res.send("Hello World")
})

app.listen( port, () => {
    console.log(`Server is started at port ${port}`)
})

