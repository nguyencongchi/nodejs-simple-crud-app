const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World Updated!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect("mongodb+srv://admin:C8RdaotAgSIk4Bdw@bedatabase.pnaff.mongodb.net/?retryWrites=true&w=majority&appName=BEDatabase")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));