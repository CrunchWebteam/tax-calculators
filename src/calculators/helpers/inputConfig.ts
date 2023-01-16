import { visibility } from './visibility';

export interface InputConfig {
  input: HTMLInputElement | HTMLSelectElement;
  isNodeList: boolean;
  nodeList: HTMLInputElement[] | HTMLSelectElement[];
  type: string;
  defaultValue: string | number | boolean | null;
  visibleIf?: () => boolean;
  toggleOptions?: Array<{
    option: {
      name: string;
    };
    query: {
      name: string;
      value: string;
    };
  }>;
}

export class InputConfig {
  constructor(
    name: string,
    options: {
      form: HTMLFormElement;
      visibleIf?: () => boolean;
      toggleOptions?: Array<{
        option: {
          name: string;
        };
        query: {
          name: string;
          value: string;
        };
      }>;
    }
  ) {
    // define the properties
    this.input = options.form[name];
    this.isNodeList = this.input instanceof NodeList;
    this.nodeList = this.isNodeList ? [...this.input] : [this.input];
    this.type = this.nodeList[0].type;

    // define optional propteries
    if (options.visibleIf) this.visibleIf = options.visibleIf;
    if (options.toggleOptions) this.toggleOptions = options.toggleOptions;

    // define the initial value as the inputs value
    const initialValue: string | number | boolean | null = this.getValue();
    this.defaultValue = initialValue.toString().length === 0 ? 0 : initialValue;

    // if it is not a nodeList we can override the the default using the 'data-calc-default' value
    if (!this.isNodeList) {
      const defaultAttr = this.input.getAttribute('data-calc-default');
      if (defaultAttr) this.defaultValue = defaultAttr;
    }

    // update the value of the input to the default and show/hide the input as necesary
    if (this.defaultValue === 0 || this.defaultValue) this.setValue(this.defaultValue);
    this.setVisibility();

    // add the onChange listeners
    this.nodeList.forEach((node) => {
      node.addEventListener('keyup', () => {
        document.dispatchEvent(
          new CustomEvent('renderCalc', {
            detail: {
              name: 'keyup',
              item: this,
            },
          })
        );
      });
      node.addEventListener('change', () => {
        document.dispatchEvent(
          new CustomEvent('renderCalc', {
            detail: {
              name: 'change',
              item: this,
            },
          })
        );
      });
      if (this.type !== 'number') return;
      node.addEventListener('focus', () => {
        if (this.getValueAsNumber() !== 0) return;
        this.setValue('');
      });
      node.addEventListener('focusout', () => {
        if (this.getValueAsNumber() !== 0) return;
        this.setValue('0');
      });
    });
  }

  getValue(): boolean | string {
    if (this.type === 'checkbox') return this.input.checked;
    return this.input.value;
  }

  getValueAsNumber(): number {
    if (this.type !== 'number') return NaN;
    const { valueAsNumber } = this.input;
    return isNaN(valueAsNumber) ? 0 : valueAsNumber;
  }

  getValueAsBoolean(): boolean {
    if (this.type !== 'checkbox') return false;
    return this.input.checked;
  }

  setValue(x: number | string | boolean): void {
    switch (this.type) {
      case 'number':
        this.input.value = x.toString();
        break;
      case 'select-one':
        this.input.value = x.toString();
        break;
      case 'checkbox':
        this.input.checked = x;
        break;
      case 'radio':
        this.input.value = x.toString();
        break;
    }
  }

  setVisibility(): void {
    const element = this.nodeList[0];
    if (!element) return;
    if (!this.visibleIf) return;
    visibility(element, this.visibleIf());
  }

  toDefault(): void {
    if (!this.defaultValue) return;
    this.setValue(this.defaultValue);
  }

  clear(): void {
    switch (this.type) {
      case 'number':
        this.input.value = '0';
        break;
      case 'select-one':
        this.input.value = this.input.options[0].value;
        break;
      case 'checkbox':
        this.input.checked = false;
        break;
      case 'radio':
        this.nodeList.forEach((input) => {
          input.checked = false;
        });
        break;
    }
  }

  render(): void {
    this.setVisibility();
  }
}
