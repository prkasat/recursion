function power(n, k) {
  if (n === 0) {
    return 0;
  }

  if (k === 1) {
    return n;
  }

  const kHalf = Math.floor(k/2);
  const additional = isOdd(k) ? n : 1;
  const prev = power(n, kHalf);
  
  return additional * prev * prev;
}

function isOdd(n) {
  return n % 2 !== 0;
}

console.log('power', power(2, 5));
console.log('power', power(2, 10));