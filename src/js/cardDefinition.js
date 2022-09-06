export default class CardDefinition {
  constructor(inputNo) {
    this.inputNo = inputNo;
  }

  definition() {
    const firstNumber = this.inputNo.slice(0, 2);

    switch (firstNumber) {
      case '40':
        return 'visa';
      case '20':
        return 'mir';
      case '50':
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
