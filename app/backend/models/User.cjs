"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    fullname: {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
    },
    password: { type: String, required: true },
    adminStatus: { type: Boolean, required: true },
});
var User = mongoose_1.default.model('User', userSchema);
exports.default = User;
