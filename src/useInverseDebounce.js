import { useMemo } from "react";
import { InverseDebounce } from "./InverseDebounce";

/**
 * @param {Object} props
 * @param {() => void} [props.fn]
 * @param {any[]} [props.dependencies]
 * @param {number} [props.minimumDelay]
 */
export const useInverseDebounce = (props) => {
  const {
    dependencies = [],
    fn = () => console.log("default function param of useInverseDebounce"),
    minimumDelay = 0,
  } = props;

  const genericDebounce = useMemo(() => {
    return InverseDebounce({
      fn,
      minimumDelay,
    });
  }, dependencies);

  return genericDebounce;
};
