import {IAuthRequest, IUser} from "../@types";
import UserModel from "../models/UserModel";
import {hash, compare} from "bcryptjs";
import generateToken from "../../utils/generateToken";
import gravatar from "gravatar";

const createNewUser = async ({
    name,
    email,
    password
}: IUser) => {
    const user = await UserModel.findOne({email})
    if(user)
    {
        throw new Error("User Already Registerd");
    }

    const passwordHash = await hash(password as string, 10);

    // 프로필 이미지 (아바타) 생성
    const avatar = await gravatar.url(email, {
        protocol : 'https',
        s:'200',
        r:'pg',
        d:'mm'
    })

    const createUser = await UserModel.create({
        name,
        email,
        password:passwordHash,
        profileImage:avatar
    })

    return createUser;
}

const loginUser = async({
    email,
    password,
}: IAuthRequest) => {
    const user = await UserModel.findOne({email})
    if(!user) throw new Error('user 없음');

    const isMatched = await compare(password, user.password)

    if(!isMatched) throw new Error('패스워드 오류');

    const token = await generateToken(user._id);

    return {token};
}

export { createNewUser, loginUser }