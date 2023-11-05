import { Router } from "express";
import { Article } from "../model/Article.js";
const ArtilcleRouter = Router()

ArtilcleRouter.post('/add',(req,res) => {
res.send('Articles add')
})

ArtilcleRouter.get('/list',(req,res) => {
    res.send('Article List')
})

export default ArtilcleRouter


