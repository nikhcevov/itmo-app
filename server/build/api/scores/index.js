"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var cookies, data, json;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookies = req.headers.cookie;
            console.log(cookies);
            _context.next = 4;
            return (0, _nodeFetch["default"])('https://de.ifmo.ru/api/private/eregister', {
              headers: {
                cookie: cookies
              }
            });

          case 4:
            data = _context.sent;
            _context.next = 7;
            return data.json();

          case 7:
            json = _context.sent;
            console.log(json);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(json));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = handler;
exports["default"] = _default;