import Category from "../models/Category.js"

export const getAllCategories = async (req, res) => {
    const categories = await Category.find({})
    res.status(200).json(categories)
}

export const createCategory = async (req, res) => {
    if(true){
        try {
            const newCategory = new Category(req.body)
            const category = await newCategory.save()
            res.status(200).json(category)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(400).json("You are not permitted.")
    }
}

export const deleteCategory = async (req, res) => {
    const id = req.params.id

    if(true){
        try {
            try {
                await Category.findByIdAndDelete(id)
                res.status(200).json("Category has been Deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("Category not Found")
        }
    } else {
        res.status(401).json("You are not permitted.")
    }
}