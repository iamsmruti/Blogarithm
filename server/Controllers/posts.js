import Post from "../models/Post.js"
import User from "../models/User.js"

export const getPosts = async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
}

export const getPostsByQuery = async (req, res) => {
    const posts = await Post.find({})

    const featured = req.query.featured
    const hot = req.query.hot
    const category = req.query.category
    const sortBy = req.query.sortBy

    let result

    if (featured === 'true') {
        result = posts.filter(post => post.featured === true)
    } else if (hot === 'true') {
        result = posts.filter(post => post.hot === true)
    }

    let sort = undefined
    if (req.query.type === 'latest') {
        sort = { '_id': -1 }
    } else {
        sort = { '_id': 1 }
    }

    res.send({ featured, hot, category, sortBy })
}

export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const post = await newPost.save()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getPost = async (req, res) => {
    const id = req.params.id
    const reqPost = await Post.findById(id)
    res.json(reqPost)
}

export const updatePost = async (req, res) => {
    const id = req.params.id
    const ReqUser = req.user
    const post = await Post.findById(id)
    if (ReqUser.is_admin == true || ReqUser.email == post.author) {
        try {
            const updatedPost = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })

            res.status(200).json(updatedPost)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json('You are not permitted.')
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id
    const ReqUser = req.user
    const post = Post.findById(id)

    if (ReqUser.is_admin == true || ReqUser.email == post.author) {
        try {
            try {
                await Post.findByIdAndDelete(id)
                res.status(200).json("Post has been Deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("Post not Found")
        }
    } else {
        res.status(401).json("You are not permitted.")
    }
}

export const getBookmarkedPosts = async (req, res) => {
    const token = req.cookies.access_token
    const user = jwt.verify(token, process.env.TOKEN_SECRET)

    const bookmarkedPosts = user.post_bookmarked
    try {
        const posts = await Post.find({
            _id: {
                $in: bookmarkedPosts
            }
        })

        res.send(200).json(posts)
    } catch (err) {
        res.send(405).json(err)
    }
}