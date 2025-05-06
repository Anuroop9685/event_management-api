const express = require('express')
const app=express() 
require('dotenv').config()

app.use(express.json())

app.get('/',(res,req) => {
    res.send('Event Management API is running....')
})

const PORT= process.env.PORT || 5000


app.listen(PORT,() =>{
    console.log(`Server running on PORT ${PORT}`)
})

// Adding mongodb connection
MONGO_URI 

const mongoose= require('mongoose')

mongoose.connect(process.env.MONGO_URI)