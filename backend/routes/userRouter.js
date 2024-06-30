import express from "express";
import { confirmEmail, deleteUsers, getAllUsers, getUserProfile, loginUser, logoutUser, registerUser, updateUserProfile, updateUserProfileByAdmin } from "../controllers/userControllers.js";
import { userAuth } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post('/signup', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/confirm', confirmEmail);
userRouter.post('/logout', logoutUser);
userRouter.get('/all', userAuth, getAllUsers);
userRouter.put('/all/:id', userAuth, updateUserProfileByAdmin);
userRouter.delete('/all/:id', userAuth, deleteUsers);
userRouter.route('/profile')
    .get(userAuth, getUserProfile)
    .put(userAuth, updateUserProfile);

export default userRouter;
