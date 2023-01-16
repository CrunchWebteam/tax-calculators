import { numberToCurrency, OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
// import type { CalculationInputs, CalculationOutputs } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  profit: OutputConfig;
  allowance: OutputConfig;
  taxToPay: OutputConfig;
  profitAfterTax: OutputConfig;
}

export const outputs = (form: HTMLFormElement, inputs: Inputs, figures: AnnualFigure) => {
  if (!inputs) return;

  // calculate output values
  const outputValues = calculation(
    {
      how: inputs.how.getValue(),
      capitalGains: inputs.capitalGains.getValueAsNumber(),
      otherIncome: inputs.otherIncome.getValueAsNumber(),
    },
    figures
  );

  // configure outputs
  const outputs: Outputs = {
    profit: new OutputConfig('profit', {
      form,
      value: () => outputValues.profit,
      labels: () => {
        // determine what the label should be for a given situation
        let dynamic = '';
        switch (inputs.how.getValue()) {
          case 'shares':
            dynamic = 'shares';
            break;
          case 'property':
            dynamic = 'property';
            break;
          case 'crypto':
            dynamic = 'cryptocurrencies';
            break;
          case 'other':
            dynamic = 'other assets';
            break;
        }

        // this returns a dynamic sentance
        return `Your profit from ${dynamic}`;
      },
    }),
    allowance: new OutputConfig('allowance', {
      form,
      value: () => {
        // return the desired value
        return `${numberToCurrency(figures.exemption, false)} tax-free CGT allowance`;
      },
    }),
    taxToPay: new OutputConfig('tax-to-pay', {
      form,
      value: () => outputValues.taxToPay,
    }),
    profitAfterTax: new OutputConfig('profit-after-tax', {
      form,
      value: () => outputValues.profitAfterTax,
    }),
  };

  return outputs;
};
