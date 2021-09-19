function power(n, k) {
  let result = 1;
  for (let i=0; i<k; i++) {
    result = result * n;
  }

  return result;
}

console.log('power', power(2, 5));