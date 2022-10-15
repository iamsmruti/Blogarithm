import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validation } from '../middlewares/validator.js'

import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req, res) => {
    // Validation
    const {error} = validation(req.body)
    if(error) return res.json(error.details[0].message)

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Saving the new User
    try {
        const newUser = new User({
            password: hashedPassword,
            email: req.body.email
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        // Check For Duplictaes
        if(err.keyPattern.email) res.send("Email Already Exist")
        res.status(500).json(error)
    }
}

export const loginUser = async (req, res) => {
    // Validation
    const {error} = validation(req.body)
    if(error) return res.json(error.details[0].message)

    // If User with entered Email exists
    const user = await User.findOne({ email: req.body.email})
    if(!user) return res.status(400).json({message: "Incorrect Email"})

    // If exists , the password is checked
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).json({message: "Incorrect Password"})

    // JWT Token
    const token = jwt.sign({
        id: user._id,
        email: user.email,
        is_author: user.is_author,
        is_admin: user.is_admin
    }, process.env.TOKEN_SECRET)

    return res.cookie('access_token', token, { 
        httpsOnly: true, 
        expires: new Date(Date.now() + 48 * 3600000),
        sameSite: 'none',
        secure: true 
    }) && res.status(200).json({
        message: "Logged in Successfully"
    })
}

export const logoutUser = async (req, res) => {
    return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
}