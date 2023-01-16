import { OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  dividendProfits: OutputConfig;
  taxToPay: OutputConfig;
  allowance: OutputConfig;
  profitAfterTax: OutputConfig;
}

export const outputs = (form: HTMLFormElement, inputs: Inputs, figures: AnnualFigure) => {
  if (!inputs) return;

  // calculate output values
  const outputValues = calculation(
    {
      dividendIncome: inputs.dividendIncome.getValueAsNumber(),
      otherIncome: inputs.otherIncome.getValueAsNumber(),
    },
    figures
  );

  // configure outputs
  const outputs: Outputs = {
    dividendProfits: new OutputConfig('dividend-profits', {
      form,
      value: () => outputValues.dividendProfits,
    }),
    taxToPay: new OutputConfig('tax-to-pay', {
      form,
      value: () => outputValues.taxToPay,
    }),
    allowance: new OutputConfig('allowance', {
      form,
      value: () => `£2,000 tax-free dividend allowance`,
    }),
    profitAfterTax: new OutputConfig('profit-after-tax', {
      form,
      value: () => outputValues.profitAfterTax,
    }),
  };

  return outputs;
};
