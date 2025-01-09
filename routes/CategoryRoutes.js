import express from "express";
import { AllCategory, CreateCategory, DestroyCategory, ShowCategory, UpdateCategory } from "../controllers/CategoryController.js";
const router = express.Router();

router.post('/category', CreateCategory)
router.get('/category', AllCategory)
router.get('/category/:id', ShowCategory);
router.put('/category/:id', UpdateCategory);
router.delete('/category/:id', DestroyCategory);

export default router;