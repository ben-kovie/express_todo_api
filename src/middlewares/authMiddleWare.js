import jwt from "jsonwebtoken";
import {User} from "../models/userModels.js"
import CustomError from "../errors/customeError.js";


const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new CustomError("Unauthorized user", 401));
    }

    const token = authHeader.split(" ")[1];

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decode._id).select("-password")
        next();
    } catch (error) {
        next(new CustomError("Unauthorized user", 401));
    }
};


export default auth;
