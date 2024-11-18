"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let users = [];
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
router.post("/users", (req, res) => {
    const { name, email } = req.body;
    const newUser = { name, email };
    users.push(newUser);
    res.json("User successfully added");
});
router.get("/users", (req, res) => {
    console.log(users);
    res.status(201).json(users);
});
exports.default = router;
