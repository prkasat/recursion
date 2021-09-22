function subsetHelper(slate, arr) {
  if (arr.length === 0) {
    console.log(slate);
  } else {
    subsetHelper(slate, arr.slice(1));
    subsetHelper(slate+arr[0], arr.slice(1));
  }
}

function printSubsets(s) {
  subsetHelper('', s);
}

console.log(printSubsets(['a','b','c']))