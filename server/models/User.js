import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_img: {
        type: String,
        default: ''
    },
    is_author: {
        type: Boolean,
        default: false
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    github: {
        type: String,
        default: ''
    },
    instagram: {
        type: String,
        default: ''
    },
    linkedin: {
        type: String,
        default: ''
    },
    twitter: {
        type: String,
        default: ''
    },
    posts_liked: {
        type: Array,
        default: []
    },
    posts_written: {
        type:Array,
        default: []
    },
    posts_bookmarked: {
        type: Array,
        default: []
    }
}, {timestamps : true})

const User = mongoose.model('User', UserSchema)
export default User