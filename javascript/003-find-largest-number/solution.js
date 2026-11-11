function findMax(numbers) {
  let largestSoFar = numbers[0];

  for (let i=1; i<numbers.length; i++) {
    const currentValue = numbers[i];

    if (currentValue > largestSoFar) {
      largestSoFar = currentValue;
    }
  }

  return largestSoFar;
}

console.log(findMax([12, 5, 20, 8])); // 20