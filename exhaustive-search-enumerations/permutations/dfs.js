function bsHelper(slate, n) {
  if (n === 0) {
    console.log(slate);
  }
  else {
    bsHelper(slate + '0', n-1);
    bsHelper(slate + '1', n-1);
  }
}

function binaryStrings(n) {
  bsHelper('', 3);
}

binaryStrings(3);

function dsHelper(slate, n) {
  if (n === 0) {
    console.log(slate);
  } else {
    for (let i=0; i<10; i++) {
      dsHelper(slate + i, n - 1);
    }
  }
}

function decimalStrings(n) {
  dsHelper('', n);
}

decimalStrings(3);