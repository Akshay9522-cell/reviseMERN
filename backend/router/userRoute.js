const express=require('express')

const userController=require('../controller/userController')
const multer=require('multer')
const route=express.Router()


const {createPaymentIntent} =require('../stripe/payment')

const storage=  multer.diskStorage({
    destination: (req,file, cb)=>{
        console.log(file)
     cb(null, 'upload/'); // Save files to uploads directory
    },      
    filename:(req, file, cb)=>{
     cb(null, Date.now()+"-"+file.originalname); // Keep original file name
    }  
})

const upload = multer({ storage: storage });

route.post('/login',userController.login)
route.post('/insert',upload.array('image',5),userController.insert)
route.get('/display',userController.display)
route.post('/orders',userController.order)
route.get('/allorder',userController.allOrder)



module.exports=route