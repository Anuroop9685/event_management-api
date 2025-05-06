require('dotenv').config()


const express = require('express')     // Imported necessary modules
const app = express()
const cors = require('cors');


const mongoose = require('mongoose')   // Mongoose for MongoDB interaction

app.use(cors()); 
app.use(express.json())

app.get('/', (req, res) => {           // Fixed parameter order
    res.send('Event Management API is running....')
})

const PORT = process.env.PORT || 8080

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err))

// Calling routes
const eventRoutes = require('./routes/event')
app.use('/events', eventRoutes)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});