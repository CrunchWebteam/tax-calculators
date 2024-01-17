export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23' | '2023-24' | '2024-25'; // Added '2024-25' here
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
  // ... [previous years' data]

  // Data for 2023-24
  {
    year: '2023-24',
    exemption: 6000,
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
    higherBand: 125140,
  },

  // Added data for 2024-25 (duplicate of 2023-24)
  {
    year: '2024-25',
    exemption: 6000,
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
    higherBand: 125140,
  },
];
