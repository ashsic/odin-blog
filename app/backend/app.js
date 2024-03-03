"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_js_1 = require("./models/index.js");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
(0, index_js_1.connectDb)().then(function () {
    console.log('Connected to MongoDB.');
    app.listen(port, function () {
        console.log("App listening on port ".concat(port, "."));
    });
}).catch(function (err) {
    console.error('Error connecting to MongoDB', err);
});
