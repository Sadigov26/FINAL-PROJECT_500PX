import express from 'express';
import { addUserPhoto, deleteUserPhoto, getUserPhotos } from "../controllers/photoControllers.js"
import { userAuth } from '../middleware/authMiddleware.js';

const photoRouter = express.Router()

photoRouter.post("/", userAuth,addUserPhoto)
photoRouter.get("/", userAuth,getUserPhotos)
photoRouter.delete("/:id", userAuth,deleteUserPhoto)

export default photoRouter
