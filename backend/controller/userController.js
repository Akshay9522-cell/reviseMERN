const { default: mongoose } = require('mongoose')
const productModel=require('../model/product')

const login=async(req,res)=>{

     console.log(req.body)
     res.send({
        success:true,
        message:"everything is fine"
     })
}

const insert=async(req,res)=>{
       const imageUrls = req.files.map(file => file.path);
    console.log(imageUrls)
      console.log(req.body)
      
     const{name,description,price,stock}=req.body
      const data=await productModel.create({
          name,
          description,
          price,
          stock,   
          image:imageUrls
      })
         res.send({
        success:true,
        message:"product is insert",
        pro:data
        
     })
}

 const display=async(req,res)=>{
      
       const data=await productModel.find()

       console.log(data)
       res.send(data)
 }

 

module.exports={
    login,
    insert,
    display,
   
}