import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
  own: InputConfig;
  work: InputConfig;
  type: InputConfig;
  miles: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const config: Inputs = {
    year: new InputConfig('year', { form }),
    own: new InputConfig('own', { form }),
  };

  config.work = new InputConfig('work', {
    form,
    visibleIf: () => config.own.getValue() === 'yes',
  });

  config.type = new InputConfig('type', {
    form,
    visibleIf: () => {
      if (!config.work.visibleIf) return false;
      return config.work.visibleIf() && config.work.getValue() === 'yes';
    },
  });

  config.miles = new InputConfig('miles', {
    form,
    visibleIf: () => {
      if (!config.type.visibleIf) return false;
      return config.type.visibleIf() && config.type.getValue() !== '';
    },
  });

  return config;
};
