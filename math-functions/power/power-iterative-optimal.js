function power(n, k) {
  let result = 1;
  let additional = isOdd(k) ? n : 1;

  for (let i=0; i < Math.floor(k/2); i++) {
    result = result * n;
  }

  return result * result * additional;
}

function isOdd(k) {
  return k % 2 !== 0;
}

console.log('power', power(2, 5));
console.log('power', power(2, 10));
console.log('power', power(5, 5));