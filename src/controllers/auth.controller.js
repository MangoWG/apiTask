import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { getToken } from "../libs/token.js"

export const login=async (req,res)=>{
    const {email,pass}=req.body
    try{
        const logUser = await User.findOne({email})
        if(!logUser) return res.status(400).json({message:'user not found'})
        const match=await bcrypt.compare(pass,logUser.pass)
        if(!match) return res.status(400).json({message:'Incorrect password'})
        const TOKEN = await getToken({id:logUser._id})
        res.cookie('token',TOKEN)
        res.status(200).json({
            username:logUser.username,
            email:logUser.email
        })
        
    }catch(err){
        console.log(err)
    }
}

export const register=async (req,res)=>{
    const {username,email,pass}=req.body
    try{
        const hashpass = await bcrypt.hash(pass,10)
        const newUser=new User({
            username:username,
            email:email,
            pass:hashpass
        })
        await newUser.save()
        const TOKEN = await getToken({id:newUser._id})
        res.cookie('token',TOKEN)
        res.status(200).json({
            username:newUser.username,
            email:newUser.email
        })
        
    }catch(err){
        console.log(err)
    }
}
export const logout=async (req,res)=>{
    res.cookie('token','',{
        expires:new Date(0)
    })
    res.status(200).json({'message':'logout'})
}

export const profile=async (req,res)=>{
    const profUser=await User.findById(req.user.id)
    console.log(req.user)
    res.status(200).json({
        'username':profUser.username
    })
}