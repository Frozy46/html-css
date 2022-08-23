let maxRange = 9;
let minRage = 0;
let random;
let userChoice;
let attempts = 3;

const maxInitialRange = 9;
const upRange = 4;
const upPrize = 2;

const firstAttemptPrize = 100;
const secondAttemptPrize = 50;
const thirdAttemptPrize = 25;


let hadGuessed = false;
let willContinue = true;

let firstAttemptPrizeRange1 = 100;
let secondAttemptPrizeRange1 = 50;
let thirdAttemptPrizeRange1 = 25;

let totalPrize = 0;

if (confirm('Do you want to play a game?') === false) {
  alert('You did not become a billionare, but can.');
} else {
  while (willContinue) {
    for (let j = 1; j <= attempts; j++) {
      if (j === 1) {
        random = Number(Math.floor(Math.random() * maxRange));
        console.log(random);
        userChoice = Number(
          prompt(
            'Choose a roulette pocket number from ' +
              minRage +
              ' to ' +
              (maxRange-1) +
              '\nAttempts left: ' +
              attempts +
              '\nTotal prize: ' +
              totalPrize +
              '$'+
            '\nPossible prize on current attempt: ' +
            firstAttemptPrizeRange1)
        );
      
      if (userChoice === random) {
        totalPrize += firstAttemptPrizeRange1;
        alert('Congratulation, you won! Your prize is: ' + totalPrize+'$');
        hadGuessed = true;
        break;
      } else {
        alert('You did not guess, your total prize is: ' + totalPrize + '$');
        hadGuessed = false;
      }
    }

      if (j === attempts - 1) {
        random = Number(Math.floor(Math.random() * maxRange));
        console.log(random);
        userChoice = Number(
          prompt(
            'Choose a roulette pocket number from ' +
              minRage +
              ' to ' +
              (maxRange-1) +
              '\nAttempts left: ' +
              (attempts - j+1) +
              '\nTotal prize: ' +
              totalPrize +
              '$'+
            '\nPossible prize on current attempt: ' +
            secondAttemptPrizeRange1)
        );
      

      if (userChoice === random) {
        totalPrize += secondAttemptPrizeRange1;
        alert('Congratulation, you won! Your prize is: ' + totalPrize+'$');
        hadGuessed = true;
        break;
      } else {
        alert('You did not guess, your total prize is: ' + totalPrize + '$');
        hadGuessed = false;
      }
    }


      if (j === attempts) {
        random = Number(Math.floor(Math.random() * maxRange));
        console.log(random);
        userChoice = Number(
          prompt(
            'Choose a roulette pocket number from ' +
              minRage +
              ' to ' +
              (maxRange-1) +
              '\nAttempts left: ' +
              (attempts - j+1) +
              '\nTotal prize: ' +
              totalPrize +
              '$'+
            '\nPossible prize on current attempt: ' +
            thirdAttemptPrizeRange1)
        );
      

      if (userChoice === random) {
        totalPrize += thirdAttemptPrizeRange1;
        alert('Congratulation, you won! Your prize is: ' + totalPrize+'$');
        hadGuessed = true;
        break;
      } else {
        alert(
          'Thank you for your participation. Your prize is: ' + totalPrize + '$'
        );
        hadGuessed = false;
      }
    }

  }

    if (hadGuessed) {
      if (confirm('Do you want to continue?') === false) {
        alert(
          'Thank you for your participation. Your prize is: ' + totalPrize + '$');
        
      }else{
      willContinue = true;
      maxRange += upRange;
      firstAttemptPrizeRange1 *= upPrize;
      secondAttemptPrizeRange1 *= upPrize;
      thirdAttemptPrizeRange1 *= upPrize;
      continue;
      }
    }

    if (confirm('Do you want to play again?') === true) {
      willContinue = true;
      maxRange = maxInitialRange;
      firstAttemptPrizeRange1 = firstAttemptPrize;
      secondAttemptPrizeRange1 = secondAttemptPrize;
      thirdAttemptPrizeRange1 = thirdAttemptPrize;
      totalPrize = 0;
      continue;
      
    } else {
      willContinue = false;
    }
  }
}
