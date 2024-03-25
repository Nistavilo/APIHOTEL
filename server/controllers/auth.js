const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async(req,res,next)=>{
    const{username,pasword,email} = req.body
    try{
        const user = await User.findOne(email)
        if(user){
            return res.status(500).json({message: "zaten böyle bir kullanıcı bulunmakta..."})
        }
        if(pasword.length <6) res.status(500).json({message:"parolanız çok kısa..."})
        const paswordHash = await bcrypt.hash(pasword,12)
        if(isEmail(email)) res.status(500).json({message:"email tipinde değil..."})
        const newUser = await User.create({...req.body ,password: passwordHash})
        const token = await jwt.sign({id: newUser._id,idAdmin:newUser.isAdmin},"SECRET_KEY",{expiresIn:"1h"})
        res.cookie("token",token,{httpOnly:true}).status(201).json({
            token,
            newUser
        })

    }catch (error){ 
    res.status(500).json({message:error})}

}

const login = async(req,res,next)=>{
    const{username,pasword,email} = req.body
    try{
        const user = await User.findOne(email)
        if(!user){
            return res.status(500).json({message: "böyle bir kullanıcı bulunmammakta..."})
        }
        const paswordCompare= await bcrypt.compare(pasword,user.password)

        if(!passwordCompare) {
            return res.status(500).json({message:"parolalar eşleşmemekte..."})
        }

        const token = await jwt.sign({id: user._id,idAdmin: user.isAdmin},"SECRET_KEY",{expiresIn:"1h"})
        
        res.cookie("token",token,{httpOnly:true}).status(200).json({
            token,
            user
        })

    }catch (error){ 
    res.status(500).json({message:error})}

}


function isEmail(emailAdress){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailAdress.match(regex))
        return true
    else   
        return false
}


module.exports = {register,login}