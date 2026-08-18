import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },

    phone: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["CUSTOMER", "ADMIN"],
        default: "CUSTOMER",
    },

    isDeletedAccount: {
        type: Boolean,
        default: false,
    },

    lastLogin: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
}, );

const User = mongoose.model("User", userSchema);

export default User;