import express from 'express'
const router = express.Router()

import { loginUser , registerUser, logoutUser } from '../Controllers/auth.js'
import { userAuth } from '../middlewares/userAuth.js'

router.post('/register', registerUser )
router.post('/login', loginUser)
router.get('/logout', userAuth, logoutUser)


export default router