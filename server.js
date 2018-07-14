const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const bodyParser = require('body-parser')
const passport = require('passport');

const app = express()

const db = require('./config').mongoURI

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo connect OK'))
    .catch(error => console.log(`Mongo connect error ${error}`))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize());
router(app)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server run on port ${port}`))