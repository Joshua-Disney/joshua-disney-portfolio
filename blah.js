function makeAnagrams(a, b) {
  const sortString = function(string) {
    return string.split("").sort();
  };

  let sortedA = sortString(a);
  let sortedB = sortString(b);
  let count = 0;

  for (i = 0; i < sortedA.length; i++) {
    while (sortedA[i] != sortedB[i]) {
      if (sortedA[i] < sortedB[i]) {
        sortedA.splice(i, 1);
        count += 1;
      } else if (sortedA[i] > sortedB[i]) {
        sortedB.splice(i, 1);
        count += 1;
      }
    }
  }
  while (sortedA.length != sortedB.length) {
    if (sortedA.length > sortedB.length) {
      sortedA.pop();
    } else if (sortedA.length < sortedB.length) {
      sortedB.pop();
    }
  }
  sortedA.join();
  sortedB.join();

  return count;
}

makeAnagrams("sldkjflsdj", "sldfksjdlfjsldfjsldkjf");
