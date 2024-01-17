export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23' | '2023-24' | '2024-25';
  figures?: {
    [key: string]: number;
  };
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
  },
  {
    year: '2021-22',
  },
];
