import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const inputs: Inputs = {
    year: new InputConfig('year', {
      form,
    }),
  };

  return inputs;
};
