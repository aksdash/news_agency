import { Router } from "express";
import * as ArticleController from '../controller/article.js'
import * as UserController from '../controller/user.js'
import * as Auth from '../middleware/auth.js'
import "../db/connect.js"
import { isAdminUser } from "../middleware/is-admin.js";

const ArtilcleRouter = Router()


ArtilcleRouter.post('/add', ArticleController.addArticle)
ArtilcleRouter.delete('/:id', ArticleController.deleteArticle)
ArtilcleRouter.put('/:id', ArticleController.updateArticle)
ArtilcleRouter.get('/list',ArticleController.getArticles)


export default ArtilcleRouter


