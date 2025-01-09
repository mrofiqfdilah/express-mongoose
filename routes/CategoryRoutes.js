import express from "express";
import { Create } from "../controllers/CategoryController.js";
const router = express.Router();

router.post('/category', Create);

export default router;