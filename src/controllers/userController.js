import {User} from "../models/userModels.js";
import asyncWrapper from "../middlewares/asyncWrapper.js";
import CustomError from "../errors/customeError.js";

export const register = asyncWrapper(async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new CustomError("Email already in use", 400));
    }

    const user = await User.create({ name, email, password });

    const token = user.createJWT();

    res.status(201).json({
        success: true,
        user: { name: user.name, email: user.email },
        token
    });
});

export const login = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new CustomError("Email and password required", 400));
    }

    const user = await User.findOne({ email });
    if (!user) {
        return next(new CustomError("Invalid Credentials", 401));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return next(new CustomError("Invalid Credentials", 401));
    }

    const token = user.createJWT();

    res.status(200).json({
        success: true,
        user: { name: user.name, email: user.email },
        token
    });
});
