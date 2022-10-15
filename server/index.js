import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import categoryRoutes from './routes/categories.js'

dotenv.config()
const app = express()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(cookieParser())

app.set("trust proxy", 1)

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/categories', categoryRoutes)

const URL = process.env.DB_URL
const PORT = process.env.PORT || 4500

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}`)))

export default app