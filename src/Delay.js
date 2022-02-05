/**
 * @param {number} milliseconds
 * @returns
 */
export const Delay = (milliseconds = 0) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
