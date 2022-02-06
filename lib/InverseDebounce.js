"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InverseDebounce = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _Delay = require("./Delay");

/**
 * @param {Object} props
 * @param {( args? : any) => Promise<void> | void} [props.fn]
 * @param {number} [props.minimumDelay]
 */
const InverseDebounce = props => {
  const {
    minimumDelay = 0,
    fn = () => console.log("default function param of InverseDebounce")
  } = props;
  let counter = 0;
  /**@param {any} args */

  return async function ExecuteFN(args) {
    counter += 1;
    if (counter !== 1) return;
    const listOfFn = [(0, _Delay.Delay)(minimumDelay), fn && (await fn(args))];
    await Promise.all(listOfFn);
    counter = 0;
  };
};

exports.InverseDebounce = InverseDebounce;