import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
  country: InputConfig;
  isEmployed: InputConfig;
  isSelfEmployed: InputConfig;
  annualSalary: InputConfig;
  selfEmployedIncome: InputConfig;
  selfEmployedExpenses: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const config: Inputs = {
    year: new InputConfig('year', { form }),
    country: new InputConfig('country', { form }),
    isEmployed: new InputConfig('is-employed', { form }),
    isSelfEmployed: new InputConfig('is-self-employed', { form }),
  };

  config.annualSalary = new InputConfig('annual-salary', {
    form,
    visibleIf: () => config.isEmployed.getValueAsBoolean(),
  });

  config.selfEmployedIncome = new InputConfig('self-employed-income', {
    form,
    visibleIf: () => config.isSelfEmployed.getValueAsBoolean(),
  });

  config.selfEmployedExpenses = new InputConfig('self-employed-expenses', {
    form,
    visibleIf: () => config.isSelfEmployed.getValueAsBoolean(),
  });

  return config;
};
