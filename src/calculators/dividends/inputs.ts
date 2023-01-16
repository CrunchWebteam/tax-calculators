import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
  dividendIncome: InputConfig;
  otherIncome: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const config: Inputs = {
    year: new InputConfig('year', { form }),
    dividendIncome: new InputConfig('dividend-income', { form }),
    otherIncome: new InputConfig('other-income', { form }),
  };

  return config;
};
