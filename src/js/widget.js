import { checkLuhn } from './validator';
import { CardDefinition } from './cardDefinition';

export class CardFormValidator {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
            <form id="form" class="form-inline">
                <div class="form-group">
                    <input class="form-control col-md-6" id="card_number" name="card_number" type="text" placeholder="Credit card number">
                    <button id="submitform" class="btn btn-success">Click to Validate</button>
                </div>
            </form>
        `;
  }

  static get selector() {
    return '.form-inline';
  }

  static get inputSelector() {
    return '.form-control';
  }

  static get submitSelector() {
    return '.btn';
  }

  bindToDom() {
    this.parentEl.innerHTML = CardFormValidator.markup;

    this.element = this.parentEl.querySelector(CardFormValidator.selector);
    this.input = this.parentEl.querySelector(CardFormValidator.inputSelector);
    this.submit = this.parentEl.querySelector(CardFormValidator.submitSelector);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const { value } = this.input;

    if (checkLuhn(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
    new CardDefinition(value).definition();
  }
}
