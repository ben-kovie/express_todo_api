import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userDB = mongoose.connection.useDb("userDB")
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    }
});

// hash password before saving
UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// generate JWT
UserSchema.methods.createJWT = function () {
    return jwt.sign(
        { _id: this._id, name: this.name },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
};

// compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export const User = userDB.model("User", UserSchema)