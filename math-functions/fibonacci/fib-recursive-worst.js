function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

console.log('fib', fib(5));
console.log('fib', fib(10));