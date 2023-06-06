export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23' | '2023-24';
  rates: {
    ordinary: number;
    upper: number;
    additional: number;
  };
  allowances: {
    dividends: number;
    personal: number;
    limit: number;
  };
  bands: {
    basic: number;
    higher: number;
  };
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
    rates: {
      ordinary: 0.075,
      upper: 0.325,
      additional: 0.381,
    },
    allowances: {
      dividends: 2000,
      personal: 12500,
      limit: 100000,
    },
    bands: {
      basic: 37500,
      higher: 150000,
    },
  },
  {
    year: '2021-22',
    rates: {
      ordinary: 0.075,
      upper: 0.325,
      additional: 0.381,
    },
    allowances: {
      dividends: 2000,
      personal: 12570,
      limit: 100000,
    },
    bands: {
      basic: 37700,
      higher: 150000,
    },
  },
  {
    year: '2022-23',
    rates: {
      ordinary: 0.0875,
      upper: 0.3375,
      additional: 0.3935,
    },
    allowances: {
      dividends: 2000,
      personal: 12570,
      limit: 100000,
    },
    bands: {
      basic: 37700,
      higher: 150000,
    },
  },
  {
    year: '2023-24',
    rates: {
      ordinary: 0.0875,
      upper: 0.3375,
      additional: 0.3935,
    },
    allowances: {
      dividends: 1000,
      personal: 12570,
      limit: 100000,
    },
    bands: {
      basic: 37700,
      higher: 125140,
    },
  },
];
