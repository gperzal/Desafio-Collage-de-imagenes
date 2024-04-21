import { Router } from 'express';
import { uploadImage, deleteImage } from '../controllers/imageController.js';

const router = Router();

router.post('/imagen', uploadImage);
router.get('/deleteImg/:filename', deleteImage);

export default router;
