function binaryStrings(n) {
  if (n === 1) {
    return ['0', '1'];
  }

  else {
    const prev = binaryStrings(n-1);
    const result = [];

    for (let i=0; i<prev.length; i++) {
      result.push(prev[i]+'0');
      result.push(prev[i]+'1');
    }
    
    return result;
  }
}

console.log(binaryStrings(3));