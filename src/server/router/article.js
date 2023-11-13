import { Router } from "express";
import * as ArticleController from '../controller/article.js'
import * as UserController from '../controller/user.js'
import {AuthLogin}from '../middleware/auth.js'
import "../db/connect.js"
import { isAdminUser } from "../middleware/is-admin.js";

const ArtilcleRouter = Router()


ArtilcleRouter.post('/add',AuthLogin,ArticleController.addArticle)
ArtilcleRouter.delete('/:id',AuthLogin ,ArticleController.deleteArticle)
ArtilcleRouter.put('/:id', AuthLogin,ArticleController.updateArticle)
ArtilcleRouter.get('/list',ArticleController.getArticles)


export default ArtilcleRouter


