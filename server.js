//checking if in production environment 
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();


}


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

//import mongo db 
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})


const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Database Connected'))



app.listen(process.env.PORT || 3000)



