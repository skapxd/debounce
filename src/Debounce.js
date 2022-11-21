/**
 * @template T
 * @param {Object} props
 * @param {number} [props.delay]
 * @param {boolean} [props.immediate]
 * @param {(value?: T) => void} [props.fn]
 * @returns {(value: T) => void}
 */
export function Debounce(props) {
  const {
    delay = 300,
    immediate = false,
    fn = () => console.log('default function param of the Debounce'),
  } = props;

  let timerId = null;

  return function executedFunction(...args) {
    clearTimeout(timerId);

    if (immediate) return fn(...args);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
