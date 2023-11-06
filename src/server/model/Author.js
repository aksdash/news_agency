import { Schema, model  } from "mongoose";
import { Article } from "./Article.js";

const AuthorSchema = new Schema({
    name : String,
    email: String,
    bio: String,
    articles : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Article'
        }
    ]
})

const Author = model("author", AuthorSchema, "author" )
export { Author, AuthorSchema}