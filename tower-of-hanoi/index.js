function towerOfHanoi(n, src, dest, aux) {
  if (n === 1) {
    console.log(`move disk from ${src} to ${dest}`);
    return;
  } else {
    // move n - 1 disks from src to aux 
    towerOfHanoi(n-1, src, aux, dest);

    // move the last disk from src to dest 
    towerOfHanoi(1, src, dest, aux);

    // move n-1 disks from aux to dest
    towerOfHanoi(n-1, aux, dest, src);
  }
}

towerOfHanoi(3, 'A', 'B', 'C');