import express from "express";
import { AllCategory, CreateCategory, ShowCategory } from "../controllers/CategoryController.js";
const router = express.Router();

router.post('/category', CreateCategory)
router.get('/category', AllCategory)
router.get('/category/:id', ShowCategory);

export default router;