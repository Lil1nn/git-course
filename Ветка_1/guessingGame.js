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

  console.log(�������� �᫮ �� ${min} �� ${max});

  rl.question('������ ���� �������: ', (guess) => {
    const num = parseInt(guess);

    if (isNaN(num)) {
      console.log('��������, ������ �᫮!');
      guessNumber(min, max);
    } else if (num < secretNumber) {
      console.log('���������� �᫮ �����');
      guessNumber(min, max);
    } else if (num > secretNumber) {
      console.log('���������� �᫮ �����');
      guessNumber(min, max);
    } else {
      console.log('�� 㣠����!');
      rl.close();
    }
  });
}

rl.question('������ �������쭮� ���祭�� ���������: ', (min) => {
  rl.question('������ ���ᨬ��쭮� ���祭�� ���������: ', (max) => {
    guessNumber(parseInt(min), parseInt(max));
  });
});
