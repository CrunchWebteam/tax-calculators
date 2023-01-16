/**
 * Function to return a value that is no smaller than a given minimum
 * @param value The number to start with
 * @param min The minimum the given number can go to
 * @returns The minimum or larger
 */
export const valueMin = (value: number, min: number): number => (value <= min ? min : value);
