

const express = require('express')
const app = express()
const appController = require('../controllers/appController')

app.get('/answercalenderquestions',appController.getAnswers)



module.exports = app