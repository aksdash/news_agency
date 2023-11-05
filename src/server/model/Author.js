import { Schema, model  } from "mongoose";
import { ArticleSchema } from "./Article";

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

const Author = model("author", ArticleSchema, "author" )
export { Author, AuthorSchema}