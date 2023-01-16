import * as nationalInsurance from './nationalInsurance';

export const archive = (form) => {
  const renderInputs = (inputs) => {
    for (const [key, val] of Object.entries(inputs)) {
      const { element, name, type, value, visible } = val;

      if (visible !== undefined) visibility(element, visible);

      if (type === 'radio') {
        element.value = value;
      } else {
        element.value = value;
      }
    }
  };

  const renderOutputs = (output) => {
    for (const [key, val] of Object.entries(output)) {
      const { element, name, type, value, visible } = val;

      if (visible !== undefined) visibility(element, visible);

      let text = value();
      if (type === 'currency') {
        text = new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(
          value()
        );
      }
      element.textContent = text;
    }
  };

  renderInputs(inputs);
  renderOutputs(outputs);
};

/**
 * Plan:
 * 1. create list of annual configurations
 * 2. create function to list
 */

/**
 * Plan:
 * 1. calculate total earnings
 * 2. create a function to calculate each NI class (1, 2 and 4)
 * 3. create a class to calculate the NI for the item
 *  a. include the value and whether it is needed for current inputs
 */

// const totalEarnings = (inputs) => {
//   const { type, income, expenses } = inputs;
//   // if employed = income
//   if (type !== 'self-employed') return income;

//   // if self-employed
//   // deductible is expenses up to a maximum of 1000
//   let deductible = expenses > 1000 ? 1000 : expenses;
//   // total is income negative deductible, minimum of 0
//   let total = income - deductible;
//   return total < 0 ? 0 : total;
// };

// const computation = (year, type, income, expenses) => {
//   const config = configuration.find((item) => {
//     return item.year === year;
//   });
// };

const contributions = (config, type, totalEarnings) => {
  const [UPL, PT, SPT, LPL, eNIC] = config.figures;
  const [ni] = config;

  const class1 = () => {
    if (type !== 'employed') return 0;

    // get relevant config
    const [employee, employer] = ni.class1;

    if (totalEarnings < PT) return 0;
    if (totalEarnings > UPL)
      return (UPL - PT) * employee.PTtoUEL + (totalEarnings - UPL) * employee.aboveUEL;
    return (totalEarnings - PT) * employee.PTtoUEL;
  };

  const class2 = () => {
    if (type !== 'self-employed') return 0;

    // get relevant config
    const [belowSPT, SPTtoLPL, LPLtoUPL, aboveUPL] = ni.class2;
    if (totalEarnings > SPT) return SPTtoLPL * 52;
    return 0;
  };

  const class4 = () => {
    if (type !== 'self-employed') return 0;

    // get relevant config
    const [belowSPT, SPTtoLPL, LPLtoUPL, aboveUPL] = ni.class4;
    if (totalEarnings < LPL) return 0;
    if (totalEarnings > UPL) return (UPL - LPL) * LPLtoUPL + (totalEarnings - UPL) * aboveUPL;
    return (totalEarnings - LPL) * aboveUPL;
  };

  // class class1 {
  //   constructor(ni, type, totalEarnings) {
  //     this.total = () => {
  //       if (type !== 'employed') return 0;

  //       // get relevant config
  //       const [employee, employer] = ni.class1;

  //       if (totalEarnings < PT) return 0;
  //       if (totalEarnings > UPL)
  //         return (UPL - PT) * employee.PTtoUEL + (totalEarnings - UPL) * employee.aboveUEL;
  //       return (totalEarnings - PT) * employee.PTtoUEL;
  //     };
  //   }
  // }

  // class class2 {
  //   constructor(ni, type, totalEarnings) {
  //     this.total = () => {
  //       if (type !== 'self-employed') return 0;

  //       // get relevant config
  //       const [belowSPT, SPTtoLPL, LPLtoUPL, aboveUPL] = ni.class2;
  //       if (totalEarnings > SPT) return SPTtoLPL * 52;
  //       return 0;
  //     };
  //   }
  // }

  // class class4 {
  //   constructor(ni, type, totalEarnings) {
  //     this.total = () => {
  //       if (type !== 'self-employed') return 0;

  //       // get relevant config
  //       const [belowSPT, SPTtoLPL, LPLtoUPL, aboveUPL] = ni.class4;
  //       if (totalEarnings < LPL) return 0;
  //       if (totalEarnings > UPL) return (UPL - LPL) * LPLtoUPL + (totalEarnings - UPL) * aboveUPL;
  //       return (totalEarnings - LPL) * aboveUPL;
  //     };
  //   }
  // }

  return {
    class1,
    class2,
    class4,
  };
};
