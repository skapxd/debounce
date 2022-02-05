/**
 * @param {Object} props
 * @param {(value? : any[]) => Promise<void> | void} [props.fn]
 * @param {number} [props.delay]
 * @param {boolean} [props.immediate]
 * @returns
 */

export function Debounce(props) {
  const {
    fn = () => console.log("default function param of the Debounce"),
    delay = 300,
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

    timerId = setTimeout(later, delay);
    if (callNow) fn.apply(context, args);
  };
}
