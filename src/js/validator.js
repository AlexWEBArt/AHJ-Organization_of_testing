export default function checkLuhn(cardNo) {
  const cardNoStr = String(cardNo);
  const nDigits = cardNoStr.length;

  let nSum = 0;
  let isSecond = false;
  for (let i = nDigits - 1; i >= 0; i -= 1) {
    let d = cardNoStr[i].charCodeAt() - '0'.charCodeAt();

    if (isSecond === true) d *= 2;

    nSum += parseInt(d / 10, 10);
    nSum += d % 10;

    isSecond = !isSecond;
  }

  return (nSum % 10 === 0);
}
