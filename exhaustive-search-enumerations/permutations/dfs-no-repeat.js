function pHelper(slate, arr) {
  if (arr.length === 0) {
    console.log(slate);
  } else {
    for (let i=0; i<arr.length; i++) {
      pHelper(slate + arr[i], arr.slice(0, i).concat(arr.slice(i+1)));
    }
  }
}

function printPermutations(s) {
  pHelper('', s);
}

printPermutations(['a','b','c']);