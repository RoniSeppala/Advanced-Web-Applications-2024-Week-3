"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/hello", (req, res) => {
    try {
        res.json({ "msg": "Hello World!" });
    }
    catch (error) {
        console.log(`Error parsing JSON: ${error}`);
    }
});
router.get("/echo/:id", (req, res) => {
    let id = req.params.id;
    try {
        res.json({ "id": id });
    }
    catch (error) {
        console.log(`Error parsing JSON: ${error}`);
    }
});
router.post("/sum", (req, res) => {
    let numbers = req.body.numbers;
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        sum = sum + element;
    }
    try {
        res.json({ "sum": sum });
    }
    catch (error) {
        console.log(`Error parsin JSON: ${error}`);
    }
});
exports.default = router;
