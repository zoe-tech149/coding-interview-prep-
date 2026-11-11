function findMax(mums) {
  let largestSoFar = nums[0];

  for (let i=1; i<number.length; i++) {
    const currentValue = numbers[i];

    if (currentValue > largestSoFar) {
      largestSoFar = currentValue;
    }
  }

  return largestSoFar;
}
