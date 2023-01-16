export const numberToCurrency = (number: number, showPennies: boolean): string => {
  type Options = {
    style: string;
    currency: string;
    maximumSignificantDigits?: number;
  };

  const options: Options = {
    style: 'currency',
    currency: 'GBP',
  };

  if (!showPennies) options.maximumSignificantDigits = 21;
  return new Intl.NumberFormat('gb-GB', options).format(number);
};
