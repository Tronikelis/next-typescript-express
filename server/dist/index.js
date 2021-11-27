"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var routes_1 = __importDefault(require("./routes"));
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
var dev = process.env.NODE_ENV !== "production";
var app = (0, next_1.default)({ dev: dev, dir: "../client" });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = (0, express_1.default)();
    server.use("/api", routes_1.default);
    server.get("*", function (req, res) { return handle(req, res); });
    server.listen(port, function () {
        console.log("> Ready on http://localhost:" + port);
    });
});
