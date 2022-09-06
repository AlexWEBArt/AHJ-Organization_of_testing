// TODO: write code here

// // comment this to pass build
// // const unusedVariable = 'variable';

// // for demonstration purpose only
// export default function demo(value) {
//   return value;
// }

// console.log('app.js included');

import CardFormValidator from './widget';

const container = document.querySelector('.container');
const form = new CardFormValidator(container);

form.bindToDom();
