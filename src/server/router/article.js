import { Router } from "express";
import * as ArticleController from '../controller/article.js'
import "../db/connect.js"

const ArtilcleRouter = Router()


ArtilcleRouter.post('/add', ArticleController.addArticle)

ArtilcleRouter.get('/list',(req,res) => {
    res.send('Article List')
})

export default ArtilcleRouter


