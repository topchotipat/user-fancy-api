const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const app = express()

const db = require('./config').mongoURI

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo connect OK'))
    .catch(error => console.log(`Mongo connect error ${error}`))

router(app)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server run on port ${port}`))