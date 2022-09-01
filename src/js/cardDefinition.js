export class CardDefinition {
  constructor(inputNo) {
    this.inputNo = inputNo;
    this.cards = document.querySelectorAll('.card');
    this.amex = document.querySelector('.amex');
    this.mir = document.querySelector('.mir');
  }

  definition() {
    Array.from(this.cards).forEach((item) => item.classList.add('invalidCard'));

    if (this.inputNo.length == 15 && (this.inputNo.slice(0, 2) == 34 || this.inputNo.slice(0, 2) == 37)) {
      this.amex.classList.remove('invalidCard');
    }
    if (this.inputNo.length == 16 && (this.inputNo.slice(0, 4) == 2200 || this.inputNo.slice(0, 4) == 2201
        || this.inputNo.slice(0, 4) == 2202 || this.inputNo.slice(0, 4) == 2203 || this.inputNo.slice(0, 4) == 2204)) {
      this.mir.classList.remove('invalidCard');
    }
  }
}
