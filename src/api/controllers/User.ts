import { Request, Response } from 'express';
import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel";


// 회원가입
const signUp = asyncHandler( async(req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const user = await UserModel.findOne({email});

    if(user) {
        res.status(412).json({
            message:'이미 가입된 이메일 입니다',
        })
    }

    const newUser = await UserModel.create({
        name,
        email,
        password
    })

    res.json(newUser);
})

// 로그인

//

export {signUp}