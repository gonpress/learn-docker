import mongoose from "mongoose";

const UserScheam = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        admin: {
            type: Boolean,
            default: false,
        },
        profileImage: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model("User", UserScheam);

export default User;