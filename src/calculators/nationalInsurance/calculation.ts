import type { Country, Year } from 'src/types';

import { crossCalculatorFigures } from '../helpers';
import { valueCap } from '../helpers/valueCap';
import { valueMin } from '../helpers/valueMin';
import { calculation as incomeTaxCalculation } from '../incomeTax/calculation';
import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  year: Year;
  country: Country;
  isEmployed: boolean;
  isSelfEmployed: boolean;
  annualSalary: number;
  selfEmployedIncome: number;
  selfEmployedExpenses: number;
}

export interface CalculationOutputs {
  totalEarnings: number;
  niClass1: number;
  niClass2: number;
  niClass4: number;
  niTotal: number;
  incomeTax?: number;
  remains?: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  const { ni } = figures;
  const { UPL, PT, SPT, LPL, eNIC } = figures.figures;

  const totalEarnings = (() => {
    // create a temporary total variable
    let total = 0;

    // add the annual salary if the user is employed
    if (!!inputs.isEmployed) total += inputs.annualSalary;

    // add the self employed income and deduct expenses of up to £1000 if self employed
    if (!!inputs.isSelfEmployed)
      total += inputs.selfEmployedIncome - valueCap(inputs.selfEmployedExpenses, 1000);

    // return the total at a minimum of 0
    return valueMin(total, 0);
  })();

  const niClass1 = (() => {
    if (!inputs.isEmployed) return 0;

    // get relevant config
    const { employee, employer } = ni.class1;
    if (totalEarnings < PT) return 0;
    if (totalEarnings > UPL)
      return (UPL - PT) * employee.PTtoUEL + (totalEarnings - UPL) * employee.aboveUEL;
    return (totalEarnings - PT) * employee.PTtoUEL;
  })();

  const niClass2 = (() => {
    if (!inputs.isSelfEmployed) return 0;

    // get relevant config
    const { belowSPT, SPTtoLPL, LPLtoUPL, aboveUPL } = ni.class2;
    if (totalEarnings > SPT) return SPTtoLPL * 52;
    return 0;
  })();

  const niClass4 = (() => {
    if (!inputs.isSelfEmployed) return 0;

    /**
     * 1. if totalEarnings < LPL = 0
     * 2. if totalEarnings > UPL:
     *  a. TRUE: (UPL - LPL) * LPLtoUPL + (totalEarnings - UPL) * AboveUPL
     *  b. FALSE: (totalEarnings - LPL) * LPLtoUPL
     */

    // get relevant config
    const { belowSPT, SPTtoLPL, LPLtoUPL, aboveUPL } = ni.class4;
    if (totalEarnings < LPL) return 0;
    if (totalEarnings > UPL) return (UPL - LPL) * LPLtoUPL + (totalEarnings - UPL) * aboveUPL;
    return (totalEarnings - LPL) * LPLtoUPL;
  })();

  const niTotal = niClass1 + niClass2 + niClass4;

  const { pathname } = window.location;
  if (!pathname.includes('/national-insurance')) {
    return {
      totalEarnings,
      niClass1,
      niClass2,
      niClass4,
      niTotal,
    };
  }

  const incomeTax = (() => {
    const incomeTaxFigures = crossCalculatorFigures('incomeTax', inputs.year);
    const incomeTaxOutput = incomeTaxCalculation(
      {
        year: inputs.year,
        country: inputs.country,
        isEmployed: inputs.isEmployed,
        isSelfEmployed: inputs.isSelfEmployed,
        annualSalary: inputs.annualSalary,
        selfEmployedIncome: inputs.selfEmployedIncome,
        selfEmployedExpenses: inputs.selfEmployedExpenses,
      },
      incomeTaxFigures
    );

    return incomeTaxOutput.incomeTax;
  })();

  const remains = inputs.annualSalary - incomeTax - niTotal;

  return {
    totalEarnings,
    niClass1,
    niClass2,
    niClass4,
    niTotal,
    incomeTax,
    remains,
  };
};
