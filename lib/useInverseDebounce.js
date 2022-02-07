"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInverseDebounce = void 0;

var _react = require("react");

var _InverseDebounce = require("./InverseDebounce");

/**
 * @param {Object} props
 * @param {(values: any) => void} [props.fn]
 * @param {any[]} [props.dependencies]
 * @param {number} [props.minimumDelay]
 */
const useInverseDebounce = props => {
  const {
    dependencies = [],
    fn = () => console.log("default function param of useInverseDebounce"),
    minimumDelay = 0
  } = props;
  const genericDebounce = (0, _react.useMemo)(() => {
    return (0, _InverseDebounce.InverseDebounce)({
      fn,
      minimumDelay
    });
  }, dependencies);
  return genericDebounce;
};

exports.useInverseDebounce = useInverseDebounce;