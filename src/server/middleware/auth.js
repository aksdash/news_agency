import jwt from "jsonwebtoken"
import { User } from "../model/User.js"

const SECRET_KEY = process.env.SECRET_KEY;

export async function AuthLogin(req,res,next) {
    const {authorization} = req.headers;
    try {
        const payload = await jwt.verify(authorization, SECRET_KEY);
        req.user = await UserModel.findById(payload.id, { password : 0 });
        console.log(req.user)
        next();
      } catch (error) {
        res.send("Error in Authenticating...")
        //new APIError(res, {}, "user details are not correct").json();
      }
}