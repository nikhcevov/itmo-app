"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSessionFromCookie;

function getSessionFromCookie(cookieString) {
  var result = cookieString.match(/JSESSIONID=[a-zA-Z0-9.]*/);
  return result ? result[0] : null;
}