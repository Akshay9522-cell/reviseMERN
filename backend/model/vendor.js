const mongoose=require('mongoose')

const vendorSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:String
})

module.exports=mongoose.model('vendor',vendorSchema)