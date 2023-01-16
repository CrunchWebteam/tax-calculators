export interface IncomeTaxBracket {
  name: string;
  rate: number;
  incomeLimit?: number;
  from?: number;
  band?: number;
}

export interface IncomeTaxCountry {
  name: 'scotland' | 'others';
  brackets: {
    [key: string]: {
      name: string;
      rate: number;
      from?: number;
      band?: number;
      incomeLimit?: number;
    };
  };
}

export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23';
  countries: IncomeTaxCountry[];
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
    countries: [
      {
        name: 'scotland',
        brackets: {
          allowance: {
            name: 'allowance',
            rate: 0,
            from: 0,
            band: 12500,
          },
          starter: {
            name: 'starter',
            rate: 0.19,
            from: 12500,
          },
          basic: {
            name: 'basic',
            rate: 0.2,
            from: 14585,
          },
          intermediate: {
            name: 'intermediate',
            rate: 0.21,
            from: 25158,
          },
          higher: {
            name: 'higher',
            rate: 0.41,
            from: 43430,
          },
          additional: {
            name: 'additional',
            rate: 0.46,
            from: 150000,
          },
        },
      },
      {
        name: 'others',
        brackets: {
          allowance: {
            name: 'allowance',
            rate: 0,
            from: 0,
            band: 12500,
            incomeLimit: 100000,
          },
          basic: {
            name: 'basic',
            rate: 0.2,
            band: 37500,
          },
          higher: {
            name: 'higher',
            rate: 0.4,
          },
          additional: {
            name: 'additional',
            rate: 0.45,
            from: 150000,
          },
        },
      },
    ],
  },
  {
    year: '2021-22',
    countries: [
      {
        name: 'scotland',
        brackets: {
          allowance: {
            name: 'allowance',
            rate: 0,
            from: 0,
            band: 12570,
          },
          starter: {
            name: 'starter',
            rate: 0.19,
            from: 12570,
          },
          basic: {
            name: 'basic',
            rate: 0.2,
            from: 14667,
          },
          intermediate: {
            name: 'intermediate',
            rate: 0.21,
            from: 25296,
          },
          higher: {
            name: 'higher',
            rate: 0.41,
            from: 43662,
          },
          additional: {
            name: 'additional',
            rate: 0.46,
            from: 150000,
          },
        },
      },
      {
        name: 'others',
        brackets: {
          allowance: {
            name: 'allowance',
            rate: 0,
            from: 0,
            band: 12570,
            incomeLimit: 100000,
          },
          basic: {
            name: 'basic',
            rate: 0.2,
            band: 37700,
          },
          higher: {
            name: 'higher',
            rate: 0.4,
          },
          additional: {
            name: 'additional',
            rate: 0.45,
            from: 150000,
          },
        },
      },
    ],
  },
  {
    year: '2022-23',
    countries: [
      {
        name: 'scotland',
        brackets: {
          allowance: {
            name: 'allowance',
            rate: 0,
            from: 0,
            band: 12570,
          },
          starter: {
            name: 'starter',
            rate: 0.19,
            from: 12570,
          },
          basic: {
            name: 'basic',
            rate: 0.2,
            from: 14732,
          },
          intermediate: {
            name: 'intermediate',
            rate: 0.21,
            from: 25688,
          },
          higher: {
            name: 'higher',
            rate: 0.41,
            from: 43662,
          },
          additional: {
            name: 'additional',
            rate: 0.46,
            from: 150000,
          },
        },
      },
      {
        name: 'others',
        brackets: {
          allowance: {
            name: 'allowance',
            rate: 0,
            from: 0,
            band: 12570,
            incomeLimit: 100000,
          },
          basic: {
            name: 'basic',
            rate: 0.2,
            band: 37700,
          },
          higher: {
            name: 'higher',
            rate: 0.4,
          },
          additional: {
            name: 'additional',
            rate: 0.45,
            from: 150000,
          },
        },
      },
    ],
  },
];
