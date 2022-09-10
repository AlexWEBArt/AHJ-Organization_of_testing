export default class CardDefinition {
  constructor(inputNo) {
    this.inputNo = inputNo;
  }

  definition() {
    let firstNumber = this.inputNo.slice(0, 2);
    if (firstNumber[0] === '4' || firstNumber[0] === '2' || firstNumber[0] === '5') {
      /* eslint-disable prefer-destructuring */
      firstNumber = firstNumber[0];
    }
    switch (firstNumber) {
      case '4':
        return 'visa';
      case '2':
        return 'mir';
      case '5':
        return 'master';
      case '60':
        return 'discover';
      case '30':
        return 'diner_club';
      case '35':
        return 'jcb';
      case '37':
        return 'amex';
      case '34':
        return 'amex';
      default:
        return 'the card is not in the system';
    }
  }
}
