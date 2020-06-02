import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: String,
    authorId: String
})

export default model('Book', bookSchema)