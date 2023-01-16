import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  how: 'shares' | 'property' | 'crypto' | 'other';
  capitalGains: number;
  otherIncome: number;
}

export interface CalculationOutputs {
  profit: number;
  taxToPay: number;
  profitAfterTax: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  const profit = inputs.capitalGains;

  const taxToPay = (() => {
    // destructure the figures object for easy access
    const { exemption, basicBand, personalAllowance, basicRate, higherRate, badr } = figures;

    // amount of basic rate used by other income
    const basicRateUsed = inputs.otherIncome <= basicBand ? inputs.otherIncome : basicBand;

    // amount of basic rate left to be used by CG
    let remaingingBasicRate = personalAllowance + basicBand - basicRateUsed;
    remaingingBasicRate = remaingingBasicRate >= basicBand ? basicBand : remaingingBasicRate;

    // capital gains chargeable to tax
    const chargeableCapitalGains = inputs.capitalGains - exemption;

    const basicRateCapitalGains =
      chargeableCapitalGains >= remaingingBasicRate ? remaingingBasicRate : chargeableCapitalGains;

    const higherRateCapitalGains = chargeableCapitalGains - basicRateCapitalGains;

    let captialGainsTax = 0;
    switch (inputs.how) {
      case 'property':
        captialGainsTax =
          basicRateCapitalGains * basicRate.residential +
          higherRateCapitalGains * higherRate.residential;
        break;
      case 'shares':
        captialGainsTax = basicRateCapitalGains * badr + higherRateCapitalGains * badr;
        break;
      default:
        captialGainsTax =
          basicRateCapitalGains * basicRate.other + higherRateCapitalGains * higherRate.other;
    }

    return captialGainsTax;
  })();

  const profitAfterTax = inputs.capitalGains + inputs.otherIncome - taxToPay;

  return {
    profit,
    taxToPay,
    profitAfterTax,
  };
};
