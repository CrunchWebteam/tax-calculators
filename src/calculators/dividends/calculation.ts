import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  dividendIncome: number;
  otherIncome: number;
}

export interface CalculationOutputs {
  dividendProfits: number;
  taxToPay: number;
  profitAfterTax: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  const dividendProfits = inputs.dividendIncome;

  const taxToPay = (() => {
    // destructure figures for ease of access
    const { rates, allowances, bands } = figures;

    // get input values
    const { dividendIncome } = inputs;
    const { otherIncome } = inputs;
    const totalIncome = dividendIncome + otherIncome;

    // calculate the unutilized personal allowance
    const unutilizedPersonalAllowance =
      otherIncome <= allowances.personal ? allowances.personal - otherIncome : 0;

    // get the taxable amount of dividends and return 0 if there aren't any
    const taxableDividends = dividendIncome - unutilizedPersonalAllowance - allowances.dividends;
    if (taxableDividends <= 0) return 0;

    // basic rate threshold left
    const basicThreshold = allowances.personal + bands.basic;
    const basicThresholdRemaining =
      otherIncome < basicThreshold ? basicThreshold - otherIncome - allowances.dividends : 0;

    // basic rate tax
    const basicRateTax =
      basicThresholdRemaining === 0
        ? 0
        : taxableDividends >= basicThresholdRemaining
        ? basicThresholdRemaining * rates.ordinary
        : taxableDividends * rates.ordinary;

    // higher rate threshold left
    const higherThresholdRemaining =
      totalIncome > bands.higher
        ? bands.higher - otherIncome - allowances.dividends
        : totalIncome - bands.basic - allowances.personal <= 0
        ? 0
        : totalIncome - bands.basic - allowances.personal;

    // higher rate tax
    const higherRateTax =
      higherThresholdRemaining === 0
        ? 0
        : taxableDividends > higherThresholdRemaining
        ? higherThresholdRemaining * rates.upper
        : (taxableDividends - basicThresholdRemaining) * rates.upper;

    // additional rate tax
    const additionalRateTax =
      taxableDividends - basicThresholdRemaining - higherThresholdRemaining <= 0
        ? 0
        : (taxableDividends - basicThresholdRemaining - higherThresholdRemaining) *
          rates.additional;

    // total tax
    const totalTax = basicRateTax + higherRateTax + additionalRateTax;

    return totalTax;
  })();

  const profitAfterTax = inputs.dividendIncome - taxToPay;

  return {
    dividendProfits,
    taxToPay,
    profitAfterTax,
  };
};
