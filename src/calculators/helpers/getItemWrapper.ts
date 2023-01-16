export const getItemWrapper = (
  item: HTMLDivElement | HTMLInputElement | HTMLSelectElement
): HTMLDivElement | null => {
  const wrapper: HTMLDivElement | null = item.closest('data-calc="wrapper"');
  if (!wrapper) return null;
  return wrapper;
};
