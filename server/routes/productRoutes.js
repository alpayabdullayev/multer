import express from 'express';
import { createdProducts, deleteAllData, getAllProducts } from '../controller/productController.js';
import upload from '../middleware/upload.js';


const router = express.Router();


router.post('/', upload.single('image'), createdProducts);
// router.post('/', upload.array('image', 5), createdProducts)
router.get('/', getAllProducts);
router.delete('/', deleteAllData);

export default router;