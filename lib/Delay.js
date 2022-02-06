"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delay = void 0;

require("core-js/modules/es.promise.js");

/**
 * @param {number} milliseconds
 * @returns
 */
const Delay = function Delay() {
  let milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

exports.Delay = Delay;