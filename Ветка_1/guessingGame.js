const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumber(min, max) {
  const secretNumber = getRandomNumber(min, max);

  console.log(Загадано число от ${min} до ${max});

  rl.question('Введите вашу догадку: ', (guess) => {
    const num = parseInt(guess);

    if (isNaN(num)) {
      console.log('Пожалуйста, введите число!');
      guessNumber(min, max);
    } else if (num < secretNumber) {
      console.log('Загаданное число больше');
      guessNumber(min, max);
    } else if (num > secretNumber) {
      console.log('Загаданное число меньше');
      guessNumber(min, max);
    } else {
      console.log('Вы угадали!');
      rl.close();
    }
  });
}

rl.question('Введите минимальное значение диапазона: ', (min) => {
  rl.question('Введите максимальное значение диапазона: ', (max) => {
    guessNumber(parseInt(min), parseInt(max));
  });
});
