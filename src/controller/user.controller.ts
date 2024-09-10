import { User } from "../model/user.model"


export const getAllUsers=async()=>{
    const data = await User.find();
    return data;
}

export const getUser=async()=>{
    const data = await User.find();
    return data;
}