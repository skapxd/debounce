/**
 * @param {Object} props
 * @param {(value? : any[]) => Promise<void> | void} [props.fn]
 * @param {number} [props.delay]
 * @param {boolean} [props.immediate]
 * @returns
 */
export function Debounce(props: {
    fn?: ((value?: any[] | undefined) => Promise<void> | void) | undefined;
    delay?: number | undefined;
    immediate?: boolean | undefined;
}): (...args: any[]) => void;
//# sourceMappingURL=Debounce.d.ts.map