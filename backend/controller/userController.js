const orderModel=require('../model/order')
const productModel=require('../model/product')
const userModel=require('../model/user')


const login=async(req,res)=>{

     console.log(req.body)
     const{email,password}=req.body
     const data=await userModel.findOne({email})


    
     res.send({
        success:true,
        message:"everything is fine",
        user:data
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
  
 const order=async(req,res)=>{
       
      const orderData=req.body
      console.log(orderData)
     try {
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    res.status(201).json({ message: 'Order saved successfully' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Server error' });
  }
 }

 const allOrder=async(req,res)=>{
        
     const data=await orderModel.find()
     res.send(data)
 }
 

module.exports={
    login,
    insert,
    display,
    order,
    allOrder
   
}