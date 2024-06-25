import express from "express";
import { getUserProfile, loginUser, logoutUser, registerUser, updateUserProfile } from "../controllers/userControllers.js";
import { userAuth } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

// POST /api/users/signup
userRouter.post("/signup", registerUser);

// POST /api/users/login
userRouter.post("/login", loginUser);

// POST /api/users/logout
userRouter.post("/logout", logoutUser);
userRouter.route('/profile')
    .get(userAuth, getUserProfile)
    .put(userAuth, updateUserProfile);
export default userRouter;
