import jwt from "jsonwebtoken"
import { User } from "../model/User.js"

const SECRET_KEY = process.env.SECRET_KEY;
export async function AuthLogin(req,res,next) {
    const {authorization} = req.headers;
    try {
        const payload = await jwt.verify(authorization, SECRET_KEY);
        req.user = await User.findById(payload.id, { password : 0 });
        next();
      } catch (error) {
        new APIError(res, {}, "Error in Authenticating...").json();
      }
}