"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/hello", function (req, res) {
    res.status(200).json("world");
});
exports.default = router;
