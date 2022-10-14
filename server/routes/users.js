import express from 'express'
const router = express.Router()

// Middlewares for authentication levels
import { userAuth } from '../middlewares/userAuth.js'
import { adminAuth } from '../middlewares/adminAuth.js'

import { getOwnInfo, getAllUsers, getUser, updateUser, deleteUser, createUser, updateOwninfo, deleteOwnInfo } from '../Controllers/users.js'

router.get('/', userAuth, getOwnInfo)
router.put('/' , userAuth, updateOwninfo)
router.delete('/' , userAuth, deleteOwnInfo)

router.get('/all',adminAuth, getAllUsers)
router.get('/:id',adminAuth, getUser)
router.put('/:id',adminAuth, updateUser)
router.delete('/:id',adminAuth, deleteUser)
router.post('/create', adminAuth, createUser)

export default router