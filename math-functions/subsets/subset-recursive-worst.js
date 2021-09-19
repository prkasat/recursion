function subsets(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return subsets(n-1) + subsets(n-1);
  }
}

console.log('subsets:', subsets(5));