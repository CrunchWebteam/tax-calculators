import { OutputConfig } from '../helpers';
import type { AnnualFigure } from './annualFigures';
import { calculation } from './calculation';
import type { Inputs } from './inputs';

export interface Outputs {
  studentLoanTotal: OutputConfig;
  postGraduateTotal: OutputConfig;
  loanTotal: OutputConfig;
}

export const outputs = (form: HTMLFormElement, inputs: Inputs, figures: AnnualFigure) => {
  if (!inputs) return;

  // calculate output values
  const isStudent = inputs.isStudent.getValueAsBoolean();
  const isPostGraduate = inputs.isPostGraduate.getValueAsBoolean();
  const studentLoanPlan = inputs.studentLoanPlan.getValue();
  const postGraduateLoanCountry = inputs.postGraduateLoanCountry.getValue();

  const outputValues = calculation(
    {
      allIncome: inputs.allIncome.getValueAsNumber(),
      isStudent,
      isPostGraduate,
      studentLoanPlan,
      postGraduateLoanCountry,
    },
    figures
  );

  // configure outputs
  const outputs: Outputs = {
    studentLoanTotal: new OutputConfig('student-loan-total', {
      form,
      value: () => outputValues.studentLoanTotal,
      visibleIf: () => !!isStudent && !!studentLoanPlan,
    }),
    postGraduateTotal: new OutputConfig('post-graduate-total', {
      form,
      value: () => outputValues.postGraduateTotal,
      visibleIf: () => !!isPostGraduate && !!postGraduateLoanCountry,
    }),
    loanTotal: new OutputConfig('loan-total', {
      form,
      value: () => outputValues.loanTotal,
    }),
  };

  return outputs;
};
