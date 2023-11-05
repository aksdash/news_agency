import express from "express"
import 'dotenv/config'

const port = process.env.PORT || 4000
const app  = express()
app.get('/',(req, res) => {
    res.send("Hello World")
})


app.listen( port, () => {
    console.log(`Server is started at port ${port}`)
})

