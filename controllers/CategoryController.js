import Category from "../models/CategoryModel.js";

const Create = async (req, res) => {
    try {
        const StoreData = await Category.create(req.body);

        return res.status(201).json({
            status: 'success',
            data: StoreData
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

export {
    Create,
}