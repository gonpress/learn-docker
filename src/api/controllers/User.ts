import { Request, Response } from 'express';
import {createNewUser, loginUser} from "../services/User";

// 회원가입
const signUp = async (req: Request, res: Response) => {
    const {email, name, password} = req.body;
    const newUserCreated = await createNewUser({
        name,
        email,
        password
    })

    return res.json({
        result:'success',
        user:newUserCreated
    })
}

// 로그인
const login = async(req:Request, res:Response) => {
    const { email, password } = req.body;

    const loggedUser = await loginUser({email, password});

    res.json(loggedUser);
}
//

export {signUp, login}