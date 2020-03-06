"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _watchers = _interopRequireDefault(require("./api/watchers"));

var _answers = _interopRequireDefault(require("./api/answers"));

var app = (0, _express["default"])();
var port = 5000;
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', function (req, res) {
  return res.send('Hello world');
});
app.get('/api/watchers', _watchers["default"]);
app.get('/api/answers', _answers["default"]);
var server = app.listen(port, function () {
  return console.log("Watchers app listening on port ".concat(port, "!"));
});
var _default = server;
exports["default"] = _default;