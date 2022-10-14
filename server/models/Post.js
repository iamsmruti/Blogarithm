import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    title: {
        type: String, 
        unique: true
    },
    slug: {
        type: String, 
        required: true,
        unique: true
    },
    author: {
        type: Object,
        required: true
    },
    header_img: {
        type: String, 
        required: true
    },
    short_description: {
        type: String, 
        required: true
    },
    body: {
        type: Object,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: ""
    },
    tags: {
        type: Array,
        default: []
    },
    featured: {
        type: Boolean,
        default: false
    },
    hot: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema)
export default Post