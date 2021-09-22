function fib(n, b1, b2) {
  if (n === 0) {
    return b1;
  }

  return fib(n-1, b2, b1 + b2)
}

function fib(n) {
  return _fib(n, 0, 1);
}

