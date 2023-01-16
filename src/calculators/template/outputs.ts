import { OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  EXAMPLE_CONFIG: OutputConfig;
}

export const outputs = (form: HTMLFormElement, inputs: Inputs, figures: AnnualFigure) => {
  if (!inputs) return;

  // calculate output values
  const outputValues = calculation(
    {
      exampleInput: inputs.year.getValue(),
    },
    figures
  );

  // configure outputs
  const outputs: Outputs = {
    EXAMPLE_CONFIG: new OutputConfig('EXAMPLE_ELEMENT', {
      form,
      value: () => outputValues.exampleOutput,
    }),
  };

  return outputs;
};
