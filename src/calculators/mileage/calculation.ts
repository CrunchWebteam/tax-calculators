import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  own: 'yes' | 'no';
  work: 'yes' | 'no';
  type: 'car' | 'van' | 'motorcycle' | 'bicycle' | undefined;
  miles: number;
}

export interface CalculationOutputs {
  claim: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  const claim = (() => {
    // return 0 if the user does not own the vehicle, use it for work or have a set type of vehicle
    if (inputs.own !== 'yes' || inputs.work !== 'yes' || !inputs.type) return 0;

    const belowThreshold = inputs.miles >= 10000 ? 10000 : inputs.miles;
    const aboveThreshold = inputs.miles >= 10000 ? inputs.miles - 10000 : 0;

    const belowCost = figures.pre10[inputs.type] * belowThreshold;
    const aboveCost = figures.post10[inputs.type] * aboveThreshold;

    return belowCost + aboveCost;
  })();

  return {
    claim,
  };
};
