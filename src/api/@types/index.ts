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

export interface IProduct{
    name: string,
    description: string,
    product_image?: string,
    category: string,
    price: string,
    video_url?:string,
}