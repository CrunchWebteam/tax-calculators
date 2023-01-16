import { OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  totalEarnings: OutputConfig;
  taxToPay: OutputConfig;
  incomeTax: OutputConfig;
  nationalInsurance: OutputConfig;
  remains: OutputConfig;
}

export const outputs = (form: HTMLFormElement, inputs: Inputs, figures: AnnualFigure) => {
  if (!inputs) return;

  // calculate output values
  const outputValues = calculation(
    {
      year: inputs.year.getValue(),
      country: inputs.country.getValue(),
      isEmployed: inputs.isEmployed.getValueAsBoolean(),
      isSelfEmployed: inputs.isSelfEmployed.getValueAsBoolean(),
      annualSalary: inputs.annualSalary.getValueAsNumber(),
      selfEmployedIncome: inputs.selfEmployedIncome.getValueAsNumber(),
      selfEmployedExpenses: inputs.selfEmployedExpenses.getValueAsNumber(),
    },
    figures
  );

  // configure outputs
  const outputs: Outputs = {
    totalEarnings: new OutputConfig('total-earnings', {
      form,
      value: () => outputValues.totalEarnings,
    }),
    nationalInsurance: new OutputConfig('national-insurance', {
      form,
      value: () => outputValues.nationalInsurance,
    }),
    incomeTax: new OutputConfig('income-tax', {
      form,
      value: () => outputValues.incomeTax,
    }),
    taxToPay: new OutputConfig('tax-to-pay', {
      form,
      value: () => outputValues.taxToPay,
    }),
    remains: new OutputConfig('remains', {
      form,
      value: () => outputValues.remains,
    }),
  };

  return outputs;
};
