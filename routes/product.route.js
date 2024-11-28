const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;