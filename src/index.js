module.exports = function toReadable (number) {
  if (!number) return readNum[number];
 
  let result = [];
  number = number.toString().split('').reverse();

  for (let i = 0; i < number.length; i++) {
    if (number[i] != 0 && number[1] != 1) {
      result[i] = readNum[number[i]];
    }

    if (i === 1 && number[i] != 0) {
      (number[i] != 1) 
      ? result[i] = readNum[number[i] * 10]
      : result[i] = readNum[number[i] * 10 + Number(number[0])];
    }

    if (i === 2) {
      result[i] = readNum[number[i]] + ' ' + readNum[100];
    }
  }

  result = result.filter(el => el).reverse().join(' ');
  return result;
};

const readNum = {
  0: 'zero',     10: 'ten',          20: 'twenty',
  1: 'one',      11: 'eleven',       30: 'thirty',
  2: 'two',      12: 'twelve',       40: 'forty',
  3: 'three',    13: 'thirteen',     50: 'fifty',
  4: 'four',     14: 'fourteen',     60: 'sixty',
  5: 'five',     15: 'fifteen',      70: 'seventy',
  6: 'six',      16: 'sixteen',      80: 'eighty',
  7: 'seven',    17: 'seventeen',    90: 'ninety',
  8: 'eight',    18: 'eighteen',     100: 'hundred',
  9: 'nine',     19: 'nineteen'
}
