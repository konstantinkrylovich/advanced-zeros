module.exports = function getZerosCount(number, base) {
  let zerosCount = 0;
  let tmpbase = base;
  let i = 2;
  let multipliers = {};
  //divide into primes and their power
  while (tmpbase != 1) {
    if (tmpbase % i != 0) {
      i++;
    } else {
      tmpbase /= i;
      if (multipliers.hasOwnProperty(i)) {
        multipliers[i] += 1;
      } else {
        multipliers[i] = 1;
      }
    }
  }
  //count amount of primes in factorial
  function countAmount(number, divider) {
    let sum = 0;
    let tmpnumber = number;
    while (tmpnumber >= divider) {
      tmpnumber = Math.floor(tmpnumber / divider);
      sum += tmpnumber;
    }

    return sum;
  }
  
  let firstMultiplier = Object.keys(multipliers)[0];
  let currentCount = 0;
  let minCount = countAmount(number, firstMultiplier) / multipliers[firstMultiplier];
  for (multiplier in multipliers) {
    currentCount = countAmount(number, multiplier) / multipliers[multiplier];
    console.log(currentCount);
    if(currentCount<minCount) {
      minCount = currentCount;
    }  
  }
  zerosCount = Math.floor(minCount);
  
  return zerosCount;
}
