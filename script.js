'use strict';

// console.log( document.querySelector ('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'правильно!';

//   document.querySelector ('.question') . textContent = 7 ;

//  document.querySelector ('.score') . textContent = 11 ;

//  console.log(document.querySelector ('.number-input') . value);

//  document.querySelector ('.number-input') . value = 13;
//  console.log(document.querySelector ('.number-input') . value);

// 76 event lisener происходящее на странице

// const evenHandler = function () {
//    console.log(document.querySelector ('.number-input') . value);
//     }
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayGueMess = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
//
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  // console.log(guessingNumber, typeof guessingNumber);

  // не введено число || no input
  if (!guessingNumber) {
    // document.querySelector('.guess-message').textContent = 'Введи якесь число';
    displayGueMess('Введи якесь число');
    //  player won
  } else if (guessingNumber === secretNumber) {
    displayGueMess('Вііітаю! ти вгадав)');
    document.querySelector('.question').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.fontSize = '8rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.guess-message').textContent =
      //   guessingNumber > secretNumber ? ' Завелике число ' : ' Замале число ';
      displayGueMess(
        guessingNumber > secretNumber ? ' Завелике число ' : ' Замале число '
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGueMess(' game over! ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   // Завелике число || too high
// } else if (guessingNumber > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.guess-message').textContent = ' Завелике число ';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.guess-message').textContent = ' game over! ';
//     document.querySelector('.score').textContent = 0;
//   }

//   // Замале число || too low
// } else if (guessingNumber < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.guess-message').textContent = ' Замале число ';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.guess-message').textContent = ' game over! ';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });

//  перезагрузка по кліку
// document.querySelector('.again').addEventListener('click', function () {
//   location.reload(true);
// });
// алахвердова вариант
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.fontSize = '4rem';
  displayGueMess('Почни угадувати');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});
