import mongoose from "mongoose";

// create schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
{ timestamps: true } // mongoDB gives createdAt, updatedAt
);

// create model based off schema
const Note = mongoose.model("Note", noteSchema)

export default Note