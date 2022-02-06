"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebounce = void 0;

var _react = require("react");

var _Debounce = require("./Debounce");

/**
 * @param {Object} props
 * @param {() => void} [props.fn]
 * @param {any[]} [props.dependencies]
 * @param {number} [props.delay]
 */
const useDebounce = props => {
  const {
    dependencies = [],
    fn = () => console.log("default function param of useDebounce"),
    delay = 0
  } = props;
  const genericDebounce = (0, _react.useMemo)(() => {
    return (0, _Debounce.Debounce)({
      delay,
      fn
    });
  }, dependencies);
  return genericDebounce;
};

exports.useDebounce = useDebounce;