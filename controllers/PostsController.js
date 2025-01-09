import Posts from "../models/PostsModel.js";
import path from 'path';

const CreatePost = async (req, res) => {
    try {
        const { title, content, id_category } = req.body;

        // Path file yang diunggah
        const thumbnailPath = path.join('storage', req.file.filename);

        // Simpan data ke database
        const StoreData = await Posts.create({
            title,
            content,
            id_category,
            thumbnail: thumbnailPath
        });

        return res.status(201).json({
            status: 'success',
            data: StoreData
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

export { CreatePost };
