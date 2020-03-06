"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _schedule = _interopRequireDefault(require("./schedule.json"));

var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data, text, persons, ans, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch["default"])('https://de.ifmo.ru/timesys/jsonp.xhtml');

          case 2:
            data = _context.sent;
            _context.next = 5;
            return data.text();

          case 5:
            text = _context.sent;
            persons = JSON.parse(text.slice(15).slice(0, -2));
            ans = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;

            _loop = function _loop() {
              var person = _step.value;

              var watcher = _schedule["default"].find(function (w) {
                return w.id === person.userId;
              });

              if (watcher !== undefined) {
                ans.push({
                  name: watcher.name,
                  img: watcher.img,
                  schedule: (0, _toConsumableArray2["default"])(person.schedule.map(function (s) {
                    return s.day;
                  }))
                });
              }
            };

            for (_iterator = persons[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }

            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 20:
            _context.prev = 20;
            _context.prev = 21;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 23:
            _context.prev = 23;

            if (!_didIteratorError) {
              _context.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context.finish(23);

          case 27:
            return _context.finish(20);

          case 28:
            res.send(ans);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 16, 20, 28], [21,, 23, 27]]);
  }));

  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = handler;
exports["default"] = _default;