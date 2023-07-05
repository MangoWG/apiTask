import jwt from "jsonwebtoken"

export const authRequired=(req,res,next)=>{
    const {token}=req.cookies
    if(!token){
        return res.status(401).json({'message':'Unauthorized, no token'})
    } 
    jwt.verify(token,'mypass',(err,user)=>{
        if(err){
            return res.status(403).json({'message':'Invalid token'})
        }
        req.user=user
        next()
    }) 
}