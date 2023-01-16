import type { AnnualFigure } from './annualFigures';

export interface CalculationInputs {
  allIncome: number;
  isStudent: boolean;
  isPostGraduate: boolean;
  studentLoanPlan: 'plan1' | 'plan2' | 'plan4';
  postGraduateLoanCountry: 'england' | 'scotland' | 'wales' | 'northern-ireland';
}

export interface CalculationOutputs {
  studentLoanTotal: number;
  postGraduateTotal: number;
  loanTotal: number;
}

export const calculation = (
  inputs: CalculationInputs,
  figures: AnnualFigure
): CalculationOutputs => {
  const studentLoanTotal = (() => {
    // return 0 if not a student or if they have selected no plan
    if (!inputs.isStudent || !inputs.studentLoanPlan) return 0;

    // return 0 if plan4 is selected but not scotland
    if (inputs.studentLoanPlan === 'plan4' && inputs.postGraduateLoanCountry !== 'scotland')
      return 0;

    // get the relevant threshold and rate
    const { threshold, rate } = figures.studentLoans[inputs.studentLoanPlan];

    // return the calculated value
    return inputs.allIncome >= threshold ? (inputs.allIncome - threshold) * rate : 0;
  })();

  const postGraduateTotal = (() => {
    // return 0 if not a post graduate or if they have selected no country
    if (!inputs.isPostGraduate || !inputs.postGraduateLoanCountry) return 0;

    // get the relevant threshold and rate
    const { threshold, rate } = figures.postgraduateLoans[inputs.postGraduateLoanCountry];

    // return the calculated value
    return inputs.allIncome >= threshold ? (inputs.allIncome - threshold) * rate : 0;
  })();

  const loanTotal = (() => studentLoanTotal + postGraduateTotal)();

  return {
    studentLoanTotal,
    postGraduateTotal,
    loanTotal,
  };
};
