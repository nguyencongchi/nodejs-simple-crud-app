const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ "Success": true, message: "Get All Products", "Product": products })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getProduct = async (req, res) => {

    console.log(req.params);
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        res.status(200).json({ Success: true, message: "Get Product By Id", Product: product })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ "Success": true, message: "Product created", "Product": product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json({ Success: true, message: "Product Updated", Product: product })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({ Success: true, message: "Product Deleted", Product: product })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}