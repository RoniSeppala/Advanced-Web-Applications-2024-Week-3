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
exports.default = router;
