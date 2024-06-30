import { Router } from 'express';
import { uploadPhoto } from '../controllers/photoUploadController.js';
import {userAuth} from '../middleware/authMiddleware.js';

const router = Router();

router.post('/upload', userAuth, uploadPhoto);

export default router;
