const express=require('express')
const router=express.Router()

const Event = require('../models/Event')

router.post('/',async (req,res) => {
    try{
        const{title,description,date}=req.body
        const newEvent=new Event({title,description,date})
        const savedEvent = await newEvent.save()
        res.status(201).json(savedEvent);
    
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


//GET EVENT ID
router.get('/:id',async (req,res) =>{
    try{
        const event=await Event.findById(req.params.id)
        if(!event) return res.status(400).json({message:err.message})
        res.json(event)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


//PUT EVENT


router.get('/:id',async (req,res) =>{
    try{
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.json(updatedEvent)
    }
    catch (err){
        res.status(400).json({message: err.message})
    }
})

//Delete event

router.delete('/:id',async (req,res) =>{
    try{
        await Event.findByIdAndDelete(req.params.id)
        res.json({message:'Deleted successfully'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports=router