const mongoose =require('mongoose')

const eventSchema = new mongoose.Schema({     //Defining the schema
    title : {                              //Tile for the event
        type : String,
        required: true,
    },                                     //description for the event
    description : String,
    date : {                               //Date of event
        type:Date,
        required: true,
    },

})

module.exports= mongoose .model('Event', eventSchema)            //Export the event model