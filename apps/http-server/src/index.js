"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/signup', function (req, res) {
    res.send('hello');
});
app.get('/signin', function (req, res) {
    res.send('hello');
});
app.get('/chat', function (req, res) {
    res.send('chat room');
});
app.listen(3000);
