function numbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`O maior numero é ${num1}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`O maior numero é ${num2}`);
  } else {
    console.log(`O maior numero é ${num3}`);
  }

  if (num1 < num2 && num1 < num3) {
    console.log(`O menor numero é ${num1}`);
  } else if (num2 < num1 && num2 < num3) {
    console.log(`O menor numero é ${num2}`);
  } else {
    console.log(`O menor numero é ${num3}`);
  }

  const media = (num1 + num2 + num3) / 3;
  console.log(`A media é ${media}`);
}

numbers(210, 20, 310);
