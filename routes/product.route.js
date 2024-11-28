const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js");

router.get("/:id", getProduct);
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;