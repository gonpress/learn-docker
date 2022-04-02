import {IProduct} from "../@types";
import ProductModel from "../models/ProductModel";

const createProduct = async ({
    name,
    description,
    product_image,
    category,
    price,
    video_url
}: IProduct) => {

    const newProduct = await ProductModel.create({
        name,
        description,
        product_image,
        category,
        price,
        video_url,
    })

    return newProduct;
}

const getProducts = async() => {
    const products = await ProductModel.find();

    return products;
}

export { createProduct, getProducts }