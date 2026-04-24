import { userModel } from "../models/user.model.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import { config } from "../config/config.js"


 export let register = async (req,res)=>{

    const{username,email,password} =req.body

    // here checking if the user already exists or not with either the same name or email

    const isAlreadyRegistered= await userModel.findOne({
        $or:[
            {username},
           { email}
        ]
    })

// if it exists then this if conditon runs

    if(isAlreadyRegistered){

        return res.status(409).json({
            message:"Username or email already exists"
        })
    }

    // 409 is used because a conflict will arise 

    // if user does not exists then we will create new user while registering 

    // before creating a new user we will hash the password we are getting from the req.body

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")


    const user = await userModel.create({
        username,
        email,
        password :hashedPassword
    })

    // at this state user got registerd in server and its details stored in db next step is creating a token and sending it to the client side



  const token = jwt.sign(
  { id: user._id },        // payload
  config.JWT_SECRET,       // secret
  { expiresIn: "1d" }      // options
);

// 201 is used becuase a new resource is created by user on server

return res.status(201).json({
    message:"User registerd Succuessfully",
    user:{
        username:user.username,
        email:user.email,
    },
    token
}) 
}



export let getMe = async(req,res)=>{
 // iss controler ke andr 2 logic likhne hai muje 

 // 1. server kese check krega ki request konsa user kr rha hai 
 // 2. fir token nikalenge headers se


 const token= req.headers.authorization?.split(" ")[1]


 // agr token nhi mila toh ye chla do 
 if(!token){
    return res.status(401).json({
        message:"token not found"
    })
 }

// agr token mil gya toh usme se jo data bheja tha token create krte time usko decoded me save kr lo 
 const decoded = jwt.verify(token,config.JWT_SECRET)
//  console.log(decoded)


//  now with the id in decoded  user ka sara data waha dedo 


const user= await userModel.findById(decoded.id)

res.status(201).json({
    message:"user data fetched succesfully",
    user:{
        username:user.username,
        email:user.email
    }
})
  

}