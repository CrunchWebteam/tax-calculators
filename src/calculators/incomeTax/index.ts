import * as helpers from '../helpers';
import { annualFigures } from './annualFigures';
import { inputs } from './inputs';
import { outputs } from './outputs';

export const incomeTax = (form: HTMLFormElement) => {
  if (!form) return;
  helpers.initCalc(form, annualFigures, inputs, outputs);
};
