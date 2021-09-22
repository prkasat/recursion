// enumerate all binary strings of length 3
function printThreeDigitBinary() {
  for (let i=0; i<=1; i++) {
    for(let j=0; j<=1; j++){
      for(let k=0; k<=1; k++) {
        console.log(`${i}${j}${k}`);
      }
    }
  }
}

printThreeDigitBinary();