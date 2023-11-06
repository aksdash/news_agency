import { Article } from "../model/Article.js";
import { Author } from "../model/Author.js";
import "../db/connect.js"

const author = new Author({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A journalist at the news agency'

});

const article = new Article({
    title: "Smart phone are becoming a obsession",
    description: "The latest smartphone model was released today.",
    author: author._id,
    categroy: "Technology",
    tags: ['smartphone', 'tech', 'release'],
    publicationDate: new Date(),
})

export async function addArticle(req,res) {
    try {
        await author.save().then(() => article.save())
        res.status(200).send("Article saved Successfully")
    
    }catch(err){
        res.status(500).send(err)
    }
}