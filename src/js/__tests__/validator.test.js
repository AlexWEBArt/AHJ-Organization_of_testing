import checkLuhn from '../validator';

test('check validator on accuracy', () => {
  const cardNo = '79927398713';

  expect(checkLuhn(cardNo)).toBe(true);
});
