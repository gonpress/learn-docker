export interface IUser{
    name: string,
    email: string,
    password: string,
    admin?: boolean,
    profileImage?: string,
}

export interface IAuthRequest{
    email: string,
    password: string,
}