import { getConfig } from './getConfig';
import { render } from './render';

export const initCalc = (form: HTMLFormElement, annualFigures, inputs, outputs) => {
  if (!form) return;

  const calcInputs = inputs(form);
  const renderCalc = (form: HTMLFormElement) => {
    const year = calcInputs.year.getValue().toString();
    const figures = getConfig(annualFigures, year);
    if (!figures) return;

    const calcOutputs = outputs(form, calcInputs, figures);
    render(calcInputs, calcOutputs);
  };

  renderCalc(form);

  document.addEventListener('renderCalc', (event) => {
    const { name, item } = event.detail;
    if (name === 'change' && item.type === 'number' && item.getValue() === '') item.setValue('0');
    renderCalc(form);
  });
};
