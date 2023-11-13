import { Article } from "../model/Article.js";
import { Author } from "../model/Author.js";
import { APIResponse, APIError } from "../Util/ApiResponse.js";
import "../db/connect.js"

const author = new Author({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A journalist at the news agency'

});

export async function addArticle(req,res) {
    try {
        let {body} = req
        body.publicationDate = new Date()
        body.author = author
        const article = new Article(body)
        await author.save().then(() => article.save())
        new APIResponse(res,{},'Article saved Successfully').json()
    
    }catch(err){
        new APIError(res, {},"Error creating article").json();
    }
}

export async function deleteArticle(req, res) {
    console.log(req.params)
    try{
        const {params} = req
        const {id } = params
        await Article.findByIdAndDelete(id)
        new APIResponse(res,{},"Article Deleted successfully").json()    
    }catch(err){
        console.log(err)
        new APIError(res,{},err.message).json()
    }
}

export async function updateArticle(req, res) {
    try {
        let {body} = req
        if(!body.publicationDate){
            body.publicationDate = new Date()
        }
        const article = new Article(body)
        await author.save()
        res.status(201).send('Article updated successfully')
    }catch(err) {
        res.status(500).send("Internal Server Error")
    }
}

export async function getArticles(req,res){
    const { limit = 10, offset = 0 } = req.query;
    const limitNum = parseInt(limit);
    const offsetNum = parseInt(offset);
    try {
        const list = await Article.find()
        .limit(limitNum)
        .skip(offsetNum)
        new APIResponse(res,list,"").json()
    }catch(err){
        new APIError(res,{},err.message).json()
    }
}