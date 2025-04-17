const express = require('express')
const mongoose = require('mongoose')

const user = require('./schems')
const router = express.Router()

router.get('/',async(req,res)=>{
    try{
    const main =await  user.find()
    res.status(200).json({main})
    }catch(e){
        res.status(400).json({msg:"Error"})
    }
})

router.post('/item',async(req,res)=>{
    try{
    const {name,author,image} = req.body
    if(!name || !author ||!image)
        return res.status(400).json("All feilds are required")
    
    const saveDB = new user({name,author,image})
    await saveDB.save();
    res.status(200).json({msg:"DB Saved"})
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

router.put('/:id',async(req,res)=>{
    const updated = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({message:"Data Updated"})
})  

router.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    const deleted = await user.findByIdAndDelete(req.params.id)
    res.json({message:"Data Deleted"})
})




module.exports = router