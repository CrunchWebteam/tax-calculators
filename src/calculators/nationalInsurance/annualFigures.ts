export interface AnnualFigure {
  year: '2020-21' | '2021-22' | '2022-23';
  figures: {
    UPL: number;
    PT: number;
    SPT: number;
    LPL: number;
    eNIC: number;
  };
  ni: {
    class1: {
      employee: {
        belowLEL: number;
        LELtoPT: number;
        PTtoUEL: number;
        aboveUEL: number;
      };
      employer: {
        belowST: number;
        aboveST: number;
        STtoUEL: number;
      };
    };
    class1a: {
      employer: number;
    };
    class2: {
      belowSPT: number;
      SPTtoLPL: number;
      LPLtoUPL: number;
      aboveUPL: number;
    };
    class4: {
      belowSPT: number;
      SPTtoLPL: number;
      LPLtoUPL: number;
      aboveUPL: number;
    };
  };
}

export const annualFigures: AnnualFigure[] = [
  {
    year: '2020-21',
    figures: {
      UPL: 50000,
      PT: 9500,
      SPT: 6475,
      LPL: 9500,
      eNIC: 4000,
    },
    ni: {
      class1: {
        employee: {
          belowLEL: 0.0,
          LELtoPT: 0.0,
          PTtoUEL: 0.12,
          aboveUEL: 0.02,
        },
        employer: {
          belowST: 0.0,
          aboveST: 0.138,
          STtoUEL: 0,
        },
      },
      class1a: {
        employer: 0.138,
      },
      class2: {
        belowSPT: 0,
        SPTtoLPL: 3.05,
        LPLtoUPL: 3.05,
        aboveUPL: 3.05,
      },
      class4: {
        belowSPT: 0.0,
        SPTtoLPL: 0.0,
        LPLtoUPL: 0.09,
        aboveUPL: 0.02,
      },
    },
  },
  {
    year: '2021-22',
    figures: {
      UPL: 50270,
      PT: 9568,
      SPT: 6515,
      LPL: 9568,
      eNIC: 4000,
    },
    ni: {
      class1: {
        employee: {
          belowLEL: 0.0,
          LELtoPT: 0.0,
          PTtoUEL: 0.12,
          aboveUEL: 0.02,
        },
        employer: {
          belowST: 0.0,
          aboveST: 0.138,
          STtoUEL: 0.0,
        },
      },
      class1a: {
        employer: 0.138,
      },
      class2: {
        belowSPT: 0,
        SPTtoLPL: 3.05,
        LPLtoUPL: 3.05,
        aboveUPL: 3.05,
      },
      class4: {
        belowSPT: 0.0,
        SPTtoLPL: 0.0,
        LPLtoUPL: 0.09,
        aboveUPL: 0.02,
      },
    },
  },
  {
    year: '2022-23',
    figures: {
      UPL: 50270,
      PT: 12570,
      SPT: 6725,
      LPL: 11908,
      eNIC: 5000,
    },
    ni: {
      class1: {
        employee: {
          belowLEL: 0.0,
          LELtoPT: 0.0,
          PTtoUEL: 0.1325,
          aboveUEL: 0.0325,
        },
        employer: {
          belowST: 0.0,
          aboveST: 0.1505,
          STtoUEL: 0,
        },
      },
      class1a: {
        employer: 0.1453,
      },
      class2: {
        belowSPT: 0,
        SPTtoLPL: 0,
        LPLtoUPL: 3.15,
        aboveUPL: 3.15,
      },
      class4: {
        belowSPT: 0.0,
        SPTtoLPL: 0.0,
        LPLtoUPL: 0.1025,
        aboveUPL: 0.0325,
      },
    },
  },
];
