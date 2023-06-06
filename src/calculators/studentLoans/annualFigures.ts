export interface StudentLoans {
  plan1: {
    threshold: number;
    rate: number;
  };
  plan2: {
    threshold: number;
    rate: number;
  };
  plan4: {
    threshold: number;
    rate: number;
  };
}

export interface PostGraduateLoans {
  england: {
    threshold: number;
    rate: number;
  };
  scotland: {
    threshold: number;
    rate: number;
  };
  wales: {
    threshold: number;
    rate: number;
  };
  'northern-ireland': {
    threshold: number;
    rate: number;
  };
}

export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23' | '2023-24';
  studentLoans: StudentLoans;
  postgraduateLoans: PostGraduateLoans;
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
    studentLoans: {
      plan1: {
        threshold: 19390,
        rate: 0.09,
      },
      plan2: {
        threshold: 26575,
        rate: 0.09,
      },
      plan4: {
        threshold: 0,
        rate: 0,
      },
    },
    postgraduateLoans: {
      england: {
        threshold: 21000,
        rate: 0.06,
      },
      scotland: {
        threshold: 18330,
        rate: 0.09,
      },
      wales: {
        threshold: 21000,
        rate: 0.06,
      },
      'northern-ireland': {
        threshold: 18330,
        rate: 0.09,
      },
    },
  },
  {
    year: '2021-22',
    studentLoans: {
      plan1: {
        threshold: 19895,
        rate: 0.09,
      },
      plan2: {
        threshold: 27295,
        rate: 0.09,
      },
      plan4: {
        threshold: 25000,
        rate: 0.09,
      },
    },
    postgraduateLoans: {
      england: {
        threshold: 21000,
        rate: 0.06,
      },
      scotland: {
        threshold: 18330,
        rate: 0.09,
      },
      wales: {
        threshold: 21000,
        rate: 0.06,
      },
      'northern-ireland': {
        threshold: 18330,
        rate: 0.09,
      },
    },
  },
  {
    year: '2022-23',
    studentLoans: {
      plan1: {
        threshold: 20195,
        rate: 0.09,
      },
      plan2: {
        threshold: 27295,
        rate: 0.09,
      },
      plan4: {
        threshold: 25375,
        rate: 0.09,
      },
    },
    postgraduateLoans: {
      england: {
        threshold: 21000,
        rate: 0.06,
      },
      scotland: {
        threshold: 18330,
        rate: 0.09,
      },
      wales: {
        threshold: 21000,
        rate: 0.06,
      },
      'northern-ireland': {
        threshold: 18330,
        rate: 0.09,
      },
    },
  },
  {
    year: '2023-24',
    studentLoans: {
      plan1: {
        threshold: 22095,
        rate: 0.09,
      },
      plan2: {
        threshold: 27295,
        rate: 0.09,
      },
      plan4: {
        threshold: 27660,
        rate: 0.09,
      },
    },
    postgraduateLoans: {
      england: {
        threshold: 21000,
        rate: 0.06,
      },
      scotland: {
        threshold: 18330,
        rate: 0.09,
      },
      wales: {
        threshold: 21000,
        rate: 0.06,
      },
      'northern-ireland': {
        threshold: 18330,
        rate: 0.09,
      },
    },
  },
];
