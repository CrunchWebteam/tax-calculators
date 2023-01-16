/**
 * Function to return a value that is no greater than a given cap
 * @param value The number to start with
 * @param cap The maximum the given number can go to
 * @returns Between 0 and the cap
 */
export const valueCap = (value: number, cap: number): number => (value >= cap ? cap : value);
