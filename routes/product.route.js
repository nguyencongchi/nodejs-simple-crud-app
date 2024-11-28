const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { createProduct, getProduct, getProducts } = require("../controllers/product.controller.js");

router.get("/:id", getProduct);
router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;