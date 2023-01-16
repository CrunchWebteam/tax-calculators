import { OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  totalEarnings: OutputConfig;
  allowance: OutputConfig;
  niClass1: OutputConfig;
  niClass2: OutputConfig;
  niClass4: OutputConfig;
  niTotal: OutputConfig;
  incomeTax: OutputConfig;
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
      annualSalary:
        inputs.annualSalary.getValueAsNumber() + inputs.selfEmployedIncome.getValueAsNumber(),
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
    allowance: new OutputConfig('allowance', {
      form,
      value: () => '£1,000 tax-free Trading Allowance',
      visibleIf: () => inputs.isSelfEmployed.getValueAsBoolean(),
    }),
    niClass1: new OutputConfig('ni-class1', {
      form,
      value: () => outputValues.niClass1,
      visibleIf: () => inputs.isEmployed.getValueAsBoolean(),
    }),
    niClass2: new OutputConfig('ni-class2', {
      form,
      value: () => outputValues.niClass2,
      visibleIf: () => inputs.isSelfEmployed.getValueAsBoolean(),
    }),
    niClass4: new OutputConfig('ni-class4', {
      form,
      value: () => outputValues.niClass4,
      visibleIf: () => inputs.isSelfEmployed.getValueAsBoolean(),
    }),
    niTotal: new OutputConfig('ni-total', {
      form,
      value: () => outputValues.niTotal,
    }),
    incomeTax: new OutputConfig('income-tax', {
      form,
      value: () => outputValues.incomeTax,
    }),
    remains: new OutputConfig('remains', {
      form,
      value: () => outputValues.remains,
    }),
  };

  return outputs;
};
