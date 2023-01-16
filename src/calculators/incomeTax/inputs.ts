import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
  country: InputConfig;
  isEmployed: InputConfig;
  isSelfEmployed: InputConfig;
  annualSalary: InputConfig;
  incomeTaxDeducted: InputConfig;
  selfEmployedIncome: InputConfig;
  selfEmployedExpenses: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const inputs: Inputs = {
    year: new InputConfig('year', { form }),
    country: new InputConfig('country', { form }),
    isEmployed: new InputConfig('is-employed', { form }),
    isSelfEmployed: new InputConfig('is-self-employed', { form }),
  };

  inputs.annualSalary = new InputConfig('annual-salary', {
    form,
    visibleIf: () => !!inputs.isEmployed.getValue(),
  });

  // inputs.incomeTaxDeducted = new InputConfig('income-tax-deducted', {
  //   form,
  //   visibleIf: () => !!inputs.isEmployed.getValue(),
  // });

  inputs.selfEmployedIncome = new InputConfig('self-employed-income', {
    form,
    visibleIf: () => !!inputs.isSelfEmployed.getValue(),
  });

  inputs.selfEmployedExpenses = new InputConfig('self-employed-expenses', {
    form,
    visibleIf: () => !!inputs.isSelfEmployed.getValue(),
  });

  return inputs;
};
