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

const getProducts = async(keyword: {}, page: number) => {
    const pageSize = 2;

    const count = await ProductModel.countDocuments({...keyword})
    const products = await ProductModel.find({...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1))

    return {
        count,
        page,
        pages: Math.ceil(count / pageSize),
        products
    };
}

export { createProduct, getProducts }