import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  exampleInput: number;
}

export interface CalculationOutputs {
  exampleOutput: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  return {
    exampleOutput,
  };
};
