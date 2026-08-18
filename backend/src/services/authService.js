import User from "../models/User.js";

const registerUser = async(userData) => {
    const existingUser = await User.findOne({
        email: userData.email,
    });

    if (existingUser) {
        throw new Error("Email already exists.");
    }

    const user = await User.create(userData);

    return user;
};

//display all users
const getAllUsers = async() => {
    const users = await User.find();
    return users;
};

export default {
    registerUser,
    getAllUsers,
};