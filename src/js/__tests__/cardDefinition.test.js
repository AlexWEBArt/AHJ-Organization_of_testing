import CardDefinition from '../cardDefinition';

test('checking the definition of the visa card', () => {
  const isPaymentSystem = new CardDefinition('400000000000000');
  const check = 'visa';

  expect(isPaymentSystem.definition()).toBe(check);
});

test('checking the definition of the master card', () => {
  const isPaymentSystem = new CardDefinition('500000000000000');
  const check = 'master';

  expect(isPaymentSystem.definition()).toBe(check);
});

test('checking the definition of the jcb card', () => {
  const isPaymentSystem = new CardDefinition('350000000000000');
  const check = 'jcb';

  expect(isPaymentSystem.definition()).toBe(check);
});

test('checking the definition of the discover card', () => {
  const isPaymentSystem = new CardDefinition('600000000000000');
  const check = 'discover';

  expect(isPaymentSystem.definition()).toBe(check);
});

test('checking the definition of the american express card', () => {
  const isPaymentSystem1 = new CardDefinition('370000000000000');
  const isPaymentSystem2 = new CardDefinition('340000000000000');
  const check = 'amex';

  expect(isPaymentSystem1.definition()).toBe(check);
  expect(isPaymentSystem2.definition()).toBe(check);
});

test('checking the definition of the mir card', () => {
  const isPaymentSystem = new CardDefinition('200000000000000');
  const check = 'mir';

  expect(isPaymentSystem.definition()).toBe(check);
});

test('checking the definition of the diner club card', () => {
  const isPaymentSystem = new CardDefinition('300000000000000');
  const check = 'diner_club';

  expect(isPaymentSystem.definition()).toBe(check);
});
