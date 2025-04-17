const express = require('express')
const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    name:{type:String,required:true,unique:true},
    author:{type:String,required:true,unique:true},
    image:{type:String,required:true}
    
})

const mini = mongoose.model("mini",Userschema)
module.exports =  mini;







