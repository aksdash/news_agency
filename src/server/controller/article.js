import { Article } from "../model/Article.js";
import { Author } from "../model/Author.js";
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
        res.status(200).send("Article saved Successfully")
    
    }catch(err){
        res.status(500).send(err)
    }
}

export async function deleteArticle(req, res) {
    console.log(req.params)
    try{
        const {params} = req
        const {id } = params
        await Article.findByIdAndDelete(id)
        res.status(200).send("Article Deleted successfully")
    }catch(err){
        console.log(err)
        res.status(500).send(err)
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
    try {
        const list = await Article.find()
        res.status(200).send(list)
    }catch(err){
        res.status(500).send(err)
    }
}