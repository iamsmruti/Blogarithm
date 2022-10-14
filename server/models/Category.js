import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
    title:{
        type: String,
        unique: true
    },
    slug: {
        type: String,
        unique: true
    }
})

const Category = mongoose.model('Category', CategorySchema)
export default Category