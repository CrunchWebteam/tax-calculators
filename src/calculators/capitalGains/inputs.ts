import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
  how: InputConfig;
  capitalGains: InputConfig;
  otherIncome: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const config: Inputs = {
    year: new InputConfig('year', { form }),
    how: new InputConfig('how', { form }),
    capitalGains: new InputConfig('capital-gains', { form }),
    otherIncome: new InputConfig('other-income', { form }),
  };

  return config;
};
