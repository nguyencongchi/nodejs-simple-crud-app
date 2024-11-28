const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ "Success": true, message: "Get All Products", "Product": products })
    } catch (er) {
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

module.exports = {
    getProducts,
    createProduct,
}