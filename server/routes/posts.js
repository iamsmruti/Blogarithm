import express from 'express'
const router = express.Router()

import { getPosts , getPostsByQuery, getPost, updatePost, deletePost , createPost, getBookmarkedPosts} from '../Controllers/posts.js'
import {authorAuth} from '../middlewares/authorAuth.js'
import {userAuth} from '../middlewares/userAuth.js'

router.post('/',authorAuth, createPost)
router.get('/:id', getPost)
router.put('/:id', authorAuth ,updatePost)
router.delete('/:id', authorAuth, deletePost)
router.get('/all', getPosts)
router.get('/', getPostsByQuery)
router.get('/bookmarked', userAuth, getBookmarkedPosts)

export default router