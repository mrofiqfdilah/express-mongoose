import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    id_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true });

const Posts = mongoose.model('posts', PostsSchema);

export default Posts;
