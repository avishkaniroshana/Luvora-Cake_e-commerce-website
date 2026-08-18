import authService from "../services/authService.js";
import ApiResponse from "../utils/ApiResponse.js";

//testing -> POST /api/auth/register
const register = async(req, res) => {
    try {
        const user = await authService.registerUser(req.body);

        ApiResponse.success(
            res,

            "User registered successfully.",

            user,

            201,
        );
    } catch (error) {
        ApiResponse.error(
            res,

            error.message,

            400,
        );
    }
};

//testing -> GET /api/auth/users
const getAllUsers = async(req, res) => {
    try {
        const users = await authService.getAllUsers();
        ApiResponse.success(
            res,
            "Users retrieved successfully.",
            users,
            200,
        );
    } catch (error) {
        ApiResponse.error(
            res,
            error.message,
            500,
        );
    }
};

export default {
    register,
    getAllUsers,
};