const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// models
const Product = require('./models/product.model.js');

// routes
const productRoutes = require('./routes/product.route.js');

// middle ware
app.use(express.json());

app.use("/api/products", productRoutes);

mongoose
    .connect(
        "mongodb+srv://admin:C8RdaotAgSIk4Bdw@bedatabase.pnaff.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BEDatabase"
    )
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });