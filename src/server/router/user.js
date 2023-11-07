import { Router } from "express";
import * as UserController from '../controller/user.js'

const userRouter = Router()

userRouter.post('/registerUser', UserController.registerUser)
userRouter.post('/login', UserController.login)


export default userRouter
