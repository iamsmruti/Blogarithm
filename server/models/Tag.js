import mongoose from 'mongoose'

const TagSchema = mongoose.Schema({
    title:{
        type: String,
        unique: true
    },
    slug: {
        type: String,
        unique: true
    }
})

const Tag = mongoose.model('Tag', TagSchema)
export default Tag