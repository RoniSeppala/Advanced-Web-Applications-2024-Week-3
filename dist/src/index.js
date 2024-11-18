"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/hello", (req, res) => {
    res.json({ "msg": "Hello World!" });
});
router.get("/echo/:id", (req, res) => {
    let id = req.params.id;
    res.json({ "id": id });
});
exports.default = router;
