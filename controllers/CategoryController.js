import Category from "../models/CategoryModel.js";

const CreateCategory = async (req, res) => {
    try {
        const Data = await Category.create(req.body);

        return res.status(201).json({
            status: 'success',
            data: Data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

const AllCategory = async (req, res) => {
    try {
        const Data = await Category.find()

        return res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

const ShowCategory = async (req, res) => {
    try {
        const Data = await Category.findById(req.params.id)

        return res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

const UpdateCategory = async (req, res) => {
    try {
        const Data = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        return res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

const DestroyCategory = async (req, res) => {
    try {
        const Data = await Category.findByIdAndDelete(req.params.id);

        if (!Data) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Category deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

export {
    CreateCategory,
    AllCategory,
    ShowCategory,
    UpdateCategory,
    DestroyCategory
};

