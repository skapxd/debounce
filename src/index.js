// @ts-check
import { useMemo } from "react";

/**
 * @param {Object} props
 * @param {(...any) => Promise<void> | void} [props.fn]
 * @param {number} [props.delay]
 * @param {boolean} [props.immediate]
 * @returns
 */

export function Debounce(props) {
  const {
    fn = () => console.log("default func of the debounce"),
    delay: wait = 300,
    immediate = false,
  } = props;

  let timerId;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function () {
      timerId = null;
      if (!immediate) fn.apply(context, args);
    };

    let callNow = immediate && !timerId;

    clearTimeout(timerId);

    timerId = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
}

/**
 * @param {Object} props
 * @param {() => void} [props.fn]
 * @param {any[]} [props.dependencies]
 * @param {number} [props.delay]
 */
export const useDebounce = (props) => {
  const {
    dependencies = [],
    fn = () => console.log("default function of useDebounce"),
    delay = 0,
  } = props;

  const genericDebounce = useMemo(() => {
    return Debounce({
      delay,
      fn,
    });
  }, dependencies);

  return genericDebounce;
};