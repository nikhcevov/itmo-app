"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _getSessionFromCookie = _interopRequireDefault(require("../../util/getSessionFromCookie"));

var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, login, password, data, cookies, session;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, login = _req$body.login, password = _req$body.password;
            _context.next = 3;
            return (0, _nodeFetch["default"])("https://de.ifmo.ru/servlet/distributedCDE?Rule=LOGON&LOGIN=".concat(login, "&PASSWD=").concat(password));

          case 3:
            data = _context.sent;
            cookies = data.headers.get('set-cookie');
            session = (0, _getSessionFromCookie["default"])(cookies);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Credentials', 'include');
            res.setHeader('Set-Cookie', session);
            res.end(JSON.stringify('OK'));

          case 11:
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