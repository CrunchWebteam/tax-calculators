export const setText = (element, text) => {
  if (!element) return;
  const wrapper = element.closest('[data-calc="wrapper"]');
  const label = wrapper.querySelector('label');
  label.textContent = text;
};
