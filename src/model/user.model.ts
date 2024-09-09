import mongoose from "mongoose";

type IUser = {
    name: string,
    email: string,
    password: string,
    role: string,
    avatar: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        emun: ["user", "admin"],
        required: true
    },
    avatar: String,
    verified: Boolean,
}, {
    timestamps: true
})

export const User = new mongoose.Model("User", userSchema);