export function getTwoRandomNumbers (max = 2) {
  const firstNumber = getRandomNumber(max);
  let secondNumber;
  do {
    secondNumber = getRandomNumber(max);
  } while (secondNumber === firstNumber);
  return [firstNumber, secondNumber];
}

// min = 1
export function getRandomNumber (max = 2) {
  return Math.floor(Math.random() * max + 1);
}
