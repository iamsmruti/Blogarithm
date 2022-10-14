import express from "express";
const router = express.Router()

import { getAllCategories, createCategory, deleteCategory} from '../Controllers/categories.js'
import { authorAuth } from "../middlewares/authorAuth.js";

router.get('/', getAllCategories)
router.post('/', authorAuth ,createCategory)
router.delete('/:id', authorAuth ,deleteCategory)

export default router