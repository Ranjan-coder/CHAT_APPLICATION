require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const ORIGIN = process.env.ORIGIN

app.use(cors({
    origin: [ORIGIN],
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

connectDB()

const PORT = process.env.PORT || 9081

app.listen(PORT,()=>{
    console.log(`Server is Running At : http://localhost:${PORT}`)
})

