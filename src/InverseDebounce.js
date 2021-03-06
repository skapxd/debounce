import { Delay } from "./Delay";

/**
 * @param {Object} props
 * @param {( args? : any) => Promise<void> | void} [props.fn]
 * @param {number} [props.minimumDelay]
 */
export const InverseDebounce = (props) => {
  const {
    minimumDelay = 0,
    fn = () => console.log("default function param of InverseDebounce"),
  } = props;

  let counter = 0;

  /**@param {any} args */
  return async function ExecuteFN(args) {
    counter += 1;

    if (counter !== 1) return;

    const listOfFn = [
      Delay(minimumDelay),
      fn && (await fn(args)),
    ];

    await Promise.all(listOfFn);
    counter = 0;
  };
};