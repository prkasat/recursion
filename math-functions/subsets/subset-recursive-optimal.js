function subsets(n) {
  if (n === 1) {
    return 2;
  }

  const nHalf = Math.floor(n/2);
  const additional = isOdd(n) ? 2 : 1;
  const prev = subsets(nHalf);
  
  return additional * prev * prev;
}

function isOdd(n) {
  return n%2 !== 0;
}

console.log(subsets(5));
console.log(subsets(10));