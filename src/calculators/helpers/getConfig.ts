export const getConfig = (configuration: Array<object>, year: string) => {
  return configuration.find((item: object) => {
    return item.year === year;
  });
};
