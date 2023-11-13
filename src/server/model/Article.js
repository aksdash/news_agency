import {Schema,model} from "mongoose";
import { Author } from "./Author.js";


// Define the Article Schema
const ArticleSchema = new Schema({
    title : {type: String, required: true},
    description :{type: String, required: true},
    imageUrl: String,
    url : String,
    publishedAt: String,
    author : {
        type : Schema.Types.ObjectId,
        ref : 'Author',
    },
    category: String,
    tags: [String],
    publicationDate: Date
})

const Article = model("article", ArticleSchema, "article")
export { Article, ArticleSchema}

