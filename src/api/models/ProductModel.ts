import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        product_image:{
            type: String,
            default:"",
        },
        category:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        video_url:{
            type: String,
            default:"",
        },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", ProductSchema);

export default Product;