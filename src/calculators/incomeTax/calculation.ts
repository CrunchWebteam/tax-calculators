import type { Year } from 'src/types';

import { calculateTaxBrackets, crossCalculatorFigures } from '../helpers';
import type { TaxBracket } from '../helpers/calculateTaxBrackets';
import { valueCap } from '../helpers/valueCap';
import { valueMin } from '../helpers/valueMin';
import { calculation as nationalInsuranceCalculation } from '../nationalInsurance/calculation';
import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  year: Year;
  country: 'england' | 'scotland' | 'wales' | 'northern-ireland';
  isEmployed: boolean;
  isSelfEmployed: boolean;
  annualSalary: number;
  selfEmployedIncome: number;
  selfEmployedExpenses: number;
}

export interface CalculationOutputs {
  totalEarnings: number;
  incomeTax: number;
  nationalInsurance?: number;
  taxToPay?: number;
  remains?: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  const countryName = inputs.country === 'scotland' ? 'scotland' : 'others';
  const countryFigures = figures.countries.find((country) => country.name === countryName);

  const claimableExpenses = valueCap(inputs.selfEmployedExpenses, 1000);

  const totalEarnings = (() => {
    // add relevant inputs to total earnings
    let totalEarnings = 0;
    if (inputs.isEmployed) totalEarnings += inputs.annualSalary;
    if (inputs.isSelfEmployed) totalEarnings += inputs.selfEmployedIncome - claimableExpenses;
    return totalEarnings;
  })();

  const incomeTaxBrackets = (() => {
    // calculate the allowance
    const calculateAllowance = (() => {
      const incomeLimit = countryFigures?.brackets.allowance.incomeLimit;
      if (!incomeLimit) return countryFigures?.brackets.allowance.band;
      if (incomeLimit > inputs.annualSalary) return countryFigures?.brackets.allowance.band;
      const difference = inputs.annualSalary - incomeLimit;
      return valueMin(countryFigures.brackets.allowance.band - difference / 2, 0);
    })();

    // create and sort an array of country figures
    const countryFiguresArray = [];
    for (const value of Object.values(countryFigures?.brackets)) {
      countryFiguresArray.push(value);
    }
    countryFiguresArray.sort(function (a, b) {
      return a.rate - b.rate;
    });

    const taxBrackets: TaxBracket[] = [];
    countryFiguresArray.forEach((bracket, index) => {
      // dont add this bracket if there is no personal allowance to add
      if (index === 0 && calculateAllowance === 0) return;

      let from = 0;
      if (countryName === 'scotland') {
        from = bracket.from;
      } else {
        if (bracket.from) {
          from = bracket.from;
        } else if (bracket.name === 'basic') {
          from = calculateAllowance;
        } else if (bracket.name === 'higher') {
          from = calculateAllowance + countryFigures?.brackets.basic.band;
        }
      }

      taxBrackets.push({
        name: bracket.name,
        rate: bracket.rate,
        from,
      });
    });

    return calculateTaxBrackets(taxBrackets, inputs.annualSalary);
  })();

  const incomeTax = incomeTaxBrackets.reduce((sum, item) => {
    return sum + item.taxAtBracket;
  }, 0);

  const { pathname } = window.location;
  if (!pathname.includes('/income-tax')) {
    return {
      totalEarnings,
      incomeTax,
    };
  }

  const nationalInsurance = (() => {
    const nationalInsuranceFigures = crossCalculatorFigures('nationalInsurance', inputs.year);
    const nationInsuranceOutput = nationalInsuranceCalculation(
      {
        year: inputs.year,
        country: inputs.country,
        isEmployed: inputs.isEmployed,
        isSelfEmployed: inputs.isSelfEmployed,
        annualSalary: inputs.annualSalary,
        selfEmployedIncome: inputs.selfEmployedIncome,
        selfEmployedExpenses: inputs.selfEmployedExpenses,
      },
      nationalInsuranceFigures
    );

    return nationInsuranceOutput.niTotal;
  })();

  const taxToPay = incomeTax + nationalInsurance;

  const remains = totalEarnings - taxToPay;

  return {
    totalEarnings,
    incomeTax,
    nationalInsurance,
    taxToPay,
    remains,
  };
};
