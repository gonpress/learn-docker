import { Request, Response } from 'express';
import { createProduct, getProducts } from "../services/Product";

// 상품등록
const create = async (req: Request, res: Response) => {
    const {name, description, product_image, category, price, video_url} = req.body;

    const createProducted = await createProduct({
        name,
        description,
        product_image,
        category,
        price,
        video_url
    })

    return res.json({
        result: 'success',
        product: createProducted,
    })
}

const list = async(req: Request, res: Response) => {

    const products = await getProducts();

    return res.json({
        result:'success',
        products,
    })
}

export {create, list}