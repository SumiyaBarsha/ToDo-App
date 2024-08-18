require('dotenv').config()
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
//? Parse request
app.use(bodyParser.json())

connectDB()

//?routes
app.use('/api/tasks',require('./routes/api/tasks'))

//http://localhost:3000/
//? To check if the application is running
app.get('/',(req, res)=>{
    res.json({message: "Welcome to Our App!"})
})

const port = 3000
app.listen(port,()=>{
    console.log(`Server running at http://localhost: ${port}`)
})