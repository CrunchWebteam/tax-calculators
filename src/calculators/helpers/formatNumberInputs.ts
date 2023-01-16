export const formatNumberInputs = (inputs) => {
  let numberInputs = inputs.filter((input) => {
    return input.type === 'number';
  });

  numberInputs.forEach((input) => {
    input.value = 0;
    input.addEventListener('keydown', (event) => {
      if (
        ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'].includes(
          event.code
        )
      )
        return;

      if (isNaN(Number(event.key)) || event.code === 'Space') event.preventDefault();
    });

    input.addEventListener('focusout', () => {
      if (input.value === '') input.value = '0';
    });
  });
};
