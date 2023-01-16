import { InputConfig } from '../helpers';

export interface Inputs {
  year: InputConfig;
  isStudent: InputConfig;
  isPostGraduate: InputConfig;
  studentLoanPlan: InputConfig;
  postGraduateLoanCountry: InputConfig;
  allIncome: InputConfig;
}

export const inputs = (form: HTMLFormElement): Inputs => {
  const inputs: Inputs = {
    year: new InputConfig('year', { form }),
    isStudent: new InputConfig('is-student', { form }),
    isPostGraduate: new InputConfig('is-post-graduate', { form }),
  };

  inputs.studentLoanPlan = new InputConfig('student-loan-plan', {
    form,
    visibleIf: () => !!inputs.isStudent.getValue(),
    toggleOptions: [
      {
        option: {
          name: 'plan4',
        },
        query: {
          name: 'postGraduateLoanCountry',
          value: 'scotland',
        },
      },
    ],
  });

  inputs.postGraduateLoanCountry = new InputConfig('post-graduate-loan-country', {
    form,
    visibleIf: () => !!inputs.isPostGraduate.getValue(),
  });

  inputs.allIncome = new InputConfig('all-income', {
    form,
    visibleIf: () => {
      const isStudent = !!inputs.isStudent.getValue();
      const isPostGraduate = !!inputs.isPostGraduate.getValue();

      if (!isStudent && !isPostGraduate) return false;
      if (isStudent && inputs.studentLoanPlan.getValue() !== '') return true;
      if (isPostGraduate && inputs.postGraduateLoanCountry.getValue() !== '') return true;

      return false;
    },
  });

  return inputs;
};
