export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23';
  exemption: number;
  basicRate: {
    residential: number;
    other: number;
  };
  higherRate: {
    residential: number;
    other: number;
  };
  badr: number;
  personalAllowance: number;
  basicBand: number;
  higherBand: number;
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
    exemption: 12300,
    basicRate: {
      residential: 0.18,
      other: 0.1,
    },
    higherRate: {
      residential: 0.28,
      other: 0.2,
    },
    badr: 0.1,
    personalAllowance: 12500,
    basicBand: 37500,
    higherBand: 150000,
  },
  {
    year: '2021-22',
    exemption: 12300,
    basicRate: {
      residential: 0.18,
      other: 0.1,
    },
    higherRate: {
      residential: 0.28,
      other: 0.2,
    },
    badr: 0.1,
    personalAllowance: 12570,
    basicBand: 37700,
    higherBand: 150000,
  },
  {
    year: '2022-23',
    exemption: 12300,
    basicRate: {
      residential: 0.18,
      other: 0.1,
    },
    higherRate: {
      residential: 0.28,
      other: 0.2,
    },
    badr: 0.1,
    personalAllowance: 12570,
    basicBand: 37700,
    higherBand: 150000,
  },
];
