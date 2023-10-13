

const express = require('express')
const app = express()
const appRouter = require('../Task 3/routes/app.routes')



app.use('/answercalenderquestions',appRouter)


app.listen(3000, console.log('App Listening to port 3000'));