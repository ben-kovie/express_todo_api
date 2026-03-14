import express from "express";
import { register, login } from "../controllers/userController.js";
import auth from "../middlewares/authMiddleWare.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.use(auth)
export default router;
