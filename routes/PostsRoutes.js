import express from "express";
import { CreatePost } from "../controllers/PostsController.js";
import upload from '../middleware/upload.js';
const router = express.Router();

router.post('/posts', upload.single('thumbnail'), CreatePost);

export default router;