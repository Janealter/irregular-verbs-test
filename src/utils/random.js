export function getTwoRandomNumbers (max = 1) {
  const firstNumber = getRandomNumber(max);
  let secondNumber;
  do {
    secondNumber = getRandomNumber(max);
  } while (secondNumber === firstNumber)
  return [firstNumber, secondNumber];
}

export function getRandomNumber (max = 1) {
  return Math.floor(Math.random() * max + 1);
}
