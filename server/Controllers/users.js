import {validationAdmin} from '../middlewares/adminValidator.js'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getOwnInfo = async (req, res) => {
    const user = req.user
    const userInfo = await User.findOne({email : user.email})
    res.json(userInfo)
}

export const getUser = async (req, res) => {
    const user = req.user
    const id = req.params.id

    if(user.is_admin == true){
        const reqUser = await User.findById(id)
        res.json(reqUser)
    } else {
        res.json("You are not permitted, Contact Admin")
    }
}

export const getAllUsers = async (req, res) => {
    const user = req.user

    if(user.is_admin == true ) {
        const users = await User.find({})
        res.json(users)
    } else {
        res.json("You are not permitted, Contact Admin")
    }
}

export const updateUser = async (req, res) => {
    const user = req.user
    const id = req.params.id
    if(user.is_admin == true || id == user.userId){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(req.body.password, salt)
            
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})

            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json('This is not your account.')
    }
}

export const deleteUser = async (req, res) => {
    const user = req.user
    const id = req.params.id

    if(user.is_admin == true){
        try {
            const reqUser = await User.findById(id)
            try {
                await User.findByIdAndDelete(id)
                res.status(200).json("User has been Deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("User not Found")
        }
    } else {
        res.status(401).json("You are not permitted, Contact Admin")
    }
}

export const createUser = async (req, res) => {
    // Validation
    const {error} = validationAdmin(req.body)
    if(error) return res.json(error.details[0].message)

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Saving the new User
    try {
        const newUser = new User({
            password: hashedPassword,
            email: req.body.email,
            is_author: req.body.is_author,
            is_admin: req.body.is_admin
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        // Check For Duplictaes
        if(err.keyPattern.email) res.send("Email Already Exist")
        res.status(500).json(error)
    }
}

export const updateOwninfo = async (req, res) => {
    const token = req.cookies.access_token
    const user = jwt.verify(token, process.env.TOKEN_SECRET)

    if(user.id === req.body.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(user.userId, {
                $set: req.body
            }, {new: true})

            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json('This is not your account.')
    }
}

export const deleteOwnInfo = async (req, res) => {
    const token = req.cookies.access_token
    const user = jwt.verify(token, process.env.TOKEN_SECRET)

    if(user.id === req.body.id){
        try {
            const reqUser = await User.findByIdAndDelete(user.id)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json('This is not your account.')
    }
}