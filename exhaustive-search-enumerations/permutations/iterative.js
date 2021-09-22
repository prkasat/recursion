function binaryStrings(n) {
  let result = ['0', '1'];
  
  for (let i=2; i<=n; i++) {
    const newResult = [];

    for(let j=0; j<result.length; j++) {
      newResult.push(result[j] + '0');
      newResult.push(result[j] + '1');
    }

    result = newResult;
  }

  return result;
}

console.log(binaryStrings(3));