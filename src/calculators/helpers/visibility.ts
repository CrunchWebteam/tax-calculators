/**
 * function to hide or show the wrapper of a given element. The wrapper is hidden so that any related elements can be hidden with it
 * @param element the element to be hidden. This will typically be a form input element (e.g. input, select, etc...) or an output (e.g. but of text)
 * @param show true if the element should be shown, false if hidden
 * @returns nothing
 */
export const visibility = (
  element: HTMLInputElement | HTMLSelectElement | HTMLDivElement,
  show: boolean
) => {
  if (!element) return;

  const wrapper = element.closest('[data-calc="wrapper"]');
  if (!wrapper) return;
  if (show) {
    wrapper.style.removeProperty('display');
  } else {
    wrapper.style.display = 'none';
  }
};
