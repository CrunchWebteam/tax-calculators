import type { Year } from 'src/types';

import { annualFigures as capitalGainsAnnualFigures } from '../capitalGains/annualFigures';
import { annualFigures as dividendsAnnualFigures } from '../dividends/annualFigures';
import { annualFigures as incomeTaxAnnualFigures } from '../incomeTax/annualFigures';
import { annualFigures as mileageAnnualFigures } from '../mileage/annualFigures';
import { annualFigures as nationalInsuranceAnnualFigures } from '../nationalInsurance/annualFigures';
import { annualFigures as studentLoansAnnualFigures } from '../studentLoans/annualFigures';
import { getConfig } from './getConfig';

export type Calculators =
  | 'capitalGains'
  | 'dividends'
  | 'incomeTax'
  | 'mileage'
  | 'nationalInsurance'
  | 'studentLoans';

export const crossCalculatorFigures = (calculator: Calculators, year: Year) => {
  let figures;
  switch (calculator) {
    case 'capitalGains':
      figures = capitalGainsAnnualFigures;
      break;
    case 'dividends':
      figures = dividendsAnnualFigures;
      break;
    case 'incomeTax':
      figures = incomeTaxAnnualFigures;
      break;
    case 'mileage':
      figures = mileageAnnualFigures;
      break;
    case 'nationalInsurance':
      figures = nationalInsuranceAnnualFigures;
      break;
    case 'studentLoans':
      figures = studentLoansAnnualFigures;
      break;
  }

  return getConfig(figures, year);
};
