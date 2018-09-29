module.exports = function getZerosCount(number, base) {
  // your implementation
  let tmpBase = base,
      mas = [], //numbers on which base is divided
      vol = []; //powers of numbers
      zero = []; //number of zeros

  for (let i = 2; i <= tmpBase; i++) {
    if (tmpBase % i == 0) {
      mas.push(i);
      let v = 0;
      while(tmpBase % i === 0) {
        v += 1;
        tmpBase = tmpBase / i;
      }
      vol.push(v);
    }
  }

  for (let j = 0, len = mas.length; j < len; j++) {
    zero[j] = counter(mas[j], vol[j]);
  }

  zero.sort((a, b) => a - b); 

  function counter (num, pow) {
    let numZero = 0;
    let n = 1;
    while ((number / (Math.pow(num, n)))^0 > 0) {
      numZero += (number / (Math.pow(num, n)))^0;
      n += 1;
    }
    numZero = (numZero / pow)^0;
    return numZero;
  }

  return zero[0];
}