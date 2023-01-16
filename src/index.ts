import * as calculators from './calculators';

window.Webflow ||= [];
window.Webflow.push(() => {
  const wrapper = document.querySelector('[data-calc="wrapper"]');
  // sanitise the forms by formatting labels to remove `-${x}`
  const labels = [...wrapper?.querySelectorAll('.calculator-input_group label')];
  labels.forEach((label) => {
    const labelFor = label.getAttribute('for');
    if (labelFor) {
      const replacement = labelFor.replace(/(-)([0-9])+/g, '');
      label.setAttribute('for', replacement);
    } else {
      const span = label.querySelector('span');
      const spanFor = span.getAttribute('for');
      if (spanFor) {
        const replacement = spanFor.replace(/(-)([0-9])+/g, '');
        span.setAttribute('for', replacement);
      }
    }
  });

  // sanitise the forms by formatting IDs to remove `-${x}`
  const inputs = [...wrapper?.querySelectorAll('input, select')];
  inputs.forEach((input) => {
    const replacement = input.id.replace(/(-)([0-9])+/g, '');
    input.id = replacement;
    if (input.type !== 'radio') input.name = replacement;
  });

  const { pathname } = window.location;
  const slug = pathname.match(/[^\/]+/g)[1];
  const form: HTMLFormElement = document.querySelector(
    `[data-calc="wrapper"] [data-calc-name="${slug}"]`
  );

  if (!form) return;

  if (pathname.includes('/capital-gains')) calculators.capitalGains(form);
  if (pathname.includes('/dividend-tax')) calculators.dividends(form);
  if (pathname.includes('/income-tax')) calculators.incomeTax(form);
  if (pathname.includes('/national-insurance')) calculators.nationalInsurance(form);
  if (pathname.includes('/mileage')) calculators.mileage(form);
  if (pathname.includes('/student-and-post-graduate-loan-repayments'))
    calculators.studentLoans(form);
});
