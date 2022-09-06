import checkLuhn from './validator';
import CardDefinition from './cardDefinition';

export default class CardFormValidator {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
    this.onDefinition = this.onDefinition.bind(this);
  }

  static get markup() {
    return `
            <h3>Check your credit card number</h3>
            <ul class="cards list-unstyled">
              <li><span class="card visa" title="Visa">Visa</span></li>
              <li><span class="card master" title="Mastercard">Mastercard</span></li>
              <li><span class="card amex" title="American Express">American Express</span></li>
              <li><span class="card discover" title="Discover">Discover</span></li>
              <li><span class="card jcb" title="JCB">JCB</span></li>
              <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
              <li><span class="card mir" title="Mir">Mir</span></li>
            </ul>
            <form id="form" class="form-inline">
                <div class="form-group">
                    <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number">
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

  static get cardtSelector() {
    return '.card';
  }

  bindToDom() {
    this.parentEl.innerHTML = CardFormValidator.markup;

    this.element = this.parentEl.querySelector(CardFormValidator.selector);
    this.input = this.parentEl.querySelector(CardFormValidator.inputSelector);
    this.submit = this.parentEl.querySelector(CardFormValidator.submitSelector);
    this.cards = Array.from(this.parentEl.querySelectorAll(CardFormValidator.cardtSelector));

    this.element.addEventListener('submit', this.onSubmit);
    this.element.addEventListener('input', this.onDefinition);
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
  }

  onDefinition(e) {
    e.preventDefault();
    let card;
    let definition;
    if (this.input.value.length > 1) {
      this.cards.forEach((item) => item.classList.add('invalidCard'));
      card = new CardDefinition(this.input.value).definition();
      definition = this.cards.find((item) => item.classList.contains(card));
      definition.classList.remove('invalidCard');
    }
    if (this.input.value.length < 1) {
      this.cards.forEach((item) => item.classList.remove('invalidCard'));
    }
  }
}
