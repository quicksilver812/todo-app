const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoutes')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected and Listening on: ${PORT}`)
        })
    })
    .catch((err) => console.log(err))

app.use(routes)

