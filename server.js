const express = require('express') //
const app = express()
const expressLayouts = require('express-layouts')

//Talking to controller/router to get the index.js file 
const indexRouter = require('./routes/index')


app.set('view engine', 'ejs') // Set out views engine vjs
app.set('views', __dirname + '/views')

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


//using the //the router or controller file
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)



