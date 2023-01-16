import { numberToCurrency } from './numberToCurrency';
import { visibility } from './visibility';

export interface OutputConfig {
  element: HTMLDivElement | null;
  type: 'text' | 'currency';
  value: () => number | string;
  visibleIf?: () => boolean;
  labels?: () => string;
}

export class OutputConfig {
  constructor(
    name: string,
    options: {
      form: HTMLFormElement;
      value: () => number | string;
      visibleIf?: () => boolean;
      labels?: () => string;
    }
  ) {
    this.element = options.form.querySelector(`[data-calc="${name}"]`);
    this.type = this.element?.dataset.calcType === 'text' ? 'text' : 'currency';
    this.value = options.value;

    // set optional values
    if (options.visibleIf) this.visibleIf = options.visibleIf;
    if (options.labels) this.labels = options.labels;
  }

  getValue(): number | string {
    return this.value();
  }

  getValueAsNumber(): number {
    return Number(this.value());
  }

  setValue(): void {
    if (!this.element) return;
    switch (this.type) {
      case 'currency':
        this.element.textContent = numberToCurrency(Number(this.value()), true);
        break;
      case 'text':
        this.element.textContent = this.value().toString();
        break;
    }
  }

  setVisibility(): void {
    if (!this.element) return;
    if (!this.visibleIf) return;
    visibility(this.element, this.visibleIf());
  }

  getLabel(): string {
    if (!this.element) return '';
    const wrapper = this.element.closest('[data-calc="wrapper"]');
    if (!wrapper) return '';
    const label = wrapper.querySelector('label');
    if (!label) return '';
    return label.textContent ? label.textContent : '';
  }

  setLabel(): void {
    if (!this.element) return;
    const wrapper = this.element.closest('[data-calc="wrapper"]');
    if (!wrapper) return;
    const label = wrapper.querySelector('label');
    if (!label) return;
    if (!this.labels) return;
    label.textContent = this.labels();
  }

  render(): void {
    this.setLabel();
    this.setValue();
    // this.setVisibility();
  }
}
