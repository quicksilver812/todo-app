const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/ToDoRoutes')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected and Listening on: ${PORT}`)
        })
    })
    .catch((err) => console.log(err))

app.use(routes)

