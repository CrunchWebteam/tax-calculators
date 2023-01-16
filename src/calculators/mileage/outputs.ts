import { OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  claim: OutputConfig;
}

export const outputs = (form: HTMLFormElement, inputs: Inputs, figures: AnnualFigure) => {
  if (!inputs) return;

  // calculate output values
  const outputValues = calculation(
    {
      own: inputs.own.getValue(),
      work: inputs.work.getValue(),
      type: inputs.type.getValue(),
      miles: inputs.miles.getValueAsNumber(),
    },
    figures
  );

  // configure outputs
  const outputs: Outputs = {
    claim: new OutputConfig('claim', {
      form,
      value: () => outputValues.claim,
    }),
  };

  return outputs;
};
