/**
 * @jest-environment jsdom
 */

import CardFormValidator from '../widget';

test('widget should render', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormValidator(container);

  widget.bindToDom();

  expect(container.innerHTML).toEqual(CardFormValidator.markup);
});

test('widget should add valid class', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormValidator(container);

  widget.bindToDom();

  widget.input.value = '371449635398431';
  widget.submit.click();

  expect(widget.input.classList.contains('valid')).toEqual(true);
});
