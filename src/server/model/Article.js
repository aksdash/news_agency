import {Schema,model} from "mongoose";
import { Author } from "./Author.js";


// Define the Article Schema
const ArticleSchema = new Schema({
    title : String,
    description : String,
    imageUrl: String,
    author : {
        type : Schema.Types.ObjectId,
        ref : 'Author',
    },
    categroy: String,
    tags: [String],
    publicationDate: Date
})

const Article = model("article'", ArticleSchema, "article")
export { Article, ArticleSchema}

