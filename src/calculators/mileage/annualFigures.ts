export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23';
  pre10: {
    car: number;
    van: number;
    motorcycle: number;
    bicycle: number;
  };
  post10: {
    car: number;
    van: number;
    motorcycle: number;
    bicycle: number;
  };
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
    pre10: {
      car: 0.45,
      van: 0.45,
      motorcycle: 0.24,
      bicycle: 0.2,
    },
    post10: {
      car: 0.25,
      van: 0.25,
      motorcycle: 0.24,
      bicycle: 0.2,
    },
  },
  {
    year: '2021-22',
    pre10: {
      car: 0.45,
      van: 0.45,
      motorcycle: 0.24,
      bicycle: 0.2,
    },
    post10: {
      car: 0.25,
      van: 0.25,
      motorcycle: 0.24,
      bicycle: 0.2,
    },
  },
  {
    year: '2022-23',
    pre10: {
      car: 0.45,
      van: 0.45,
      motorcycle: 0.24,
      bicycle: 0.2,
    },
    post10: {
      car: 0.25,
      van: 0.25,
      motorcycle: 0.24,
      bicycle: 0.2,
    },
  },
];
