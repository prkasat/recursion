function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  let f1 = 0;
  let f2 = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = f1 + f2;
    f1 = f2;
    f2 = result;
  }

  return result;
}

console.log(fib(5));