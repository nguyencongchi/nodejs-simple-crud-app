const Product = require("../models/product.model.js");

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ "Success": true, message: "Product created", "Product": product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProduct,
}