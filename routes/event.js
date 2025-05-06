const express=require('express')
const router=express.Router()

const Event = require('../models/Event')

router.post('/',async (req,res) => {
    try{
        const{title,description,date}=req.body
        const newEvent=new Event({title,description,date})
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent);
    
    }
    catch (err){
        res.status(400).json({message:err.message})
    }

})

//GET EVENT
router.get('/',async (req,res) => {
    const events=await Event.find()
    res.json(events)
})

router.get('/:id',async (req,res) =>{})