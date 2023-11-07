import { User } from "../model/User.js";
import jwt from "jsonwebtoken"
import Bcrypt from "bcrypt"

const secret_key = process.env.SECRET_KEY || "XYZ738SDFJJSHF"

export async function registerUser(req, res){
   const {name,email, password} = req.body
    try {
        const hashPassword = await Bcrypt.hash(password,10)
        const user = new User({name,email,password: hashPassword,isAdmin:true})
        const result = await user.save()
        res.status(201).send({id: result.id})
    }catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
}

export async function login(req, res){
    const {email,password,name} = req.body  
     try {
        const user = await User.findOne({email})
        if(user){
            const {email: _email, password: _password, _id} = user
            const payload = await Bcrypt.compare(password, _password)
            if (payload){
                const token = await jwt.sign({id: _id}, secret_key)
                res.status(200).send({token: token, msg: "Login successful"})
            }else{
                res.send("UnAuthorised User")
            }
        }else{
            res.status(404).send("No User Found")
        }
     }catch(err){
        res.send(err)
     }
}