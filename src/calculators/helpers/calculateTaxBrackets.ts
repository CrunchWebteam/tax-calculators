export interface TaxBracket {
  taxAtBracket: number;
  name: string;
  rate: number;
  from: number;
}

export interface CalculatedTaxBracket extends TaxBracket {
  taxAtBracket: number;
}

/**
 * Function to calculate the amount of tax for each given bracket
 * @param taxBrackets Array of tax brackets
 * @param income The income to caluclate the tax for
 * @returns Array of tax brackets with an additional field containing the amount of tax for the given income and bracket
 */

export const calculateTaxBrackets = (
  taxBrackets: TaxBracket[],
  income: number
): CalculatedTaxBracket[] => {
  // sort the tax brackets from highest to lowest
  taxBrackets.sort(function (a, b) {
    return b.from - a.from;
  });

  // get the initial amount to tax
  let toTax = income;

  // map the tax brackets to an output
  const calculatedTaxBrackets = taxBrackets.map((bracket): CalculatedTaxBracket => {
    // get the amount taxable to the current band
    const taxable = toTax - bracket.from <= 0 ? 0 : toTax - bracket.from;
    // reduce the amount left to calculate tax for
    toTax -= taxable;

    // add the taxAtBracket key and value
    return {
      ...bracket,
      taxAtBracket: taxable * bracket.rate,
    };
  });

  // sort and return the calculated tax brackets from lowest to highest
  return calculatedTaxBrackets.sort(function (a, b) {
    return a.from - b.from;
  });
};
