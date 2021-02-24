//inputs
const p1 = {
  score: 0,
  button: document.querySelector('#p1Point'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Point'),
  display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const rounds = document.querySelector('#rounds');
//values

let roundNums = Number(rounds.value);


p1.button.addEventListener('click', () => {  //on p1 button press 
  updateScores(p1, p2)
})


p2.button.addEventListener('click', () => { // on p2 button press
  updateScores(p2, p1)
})

resetButton.addEventListener('click', reset)

rounds.addEventListener('change', function () {

  roundNums = Number(this.value);
  p1.display.classList.remove('winner', 'loser')
  p2.display.classList.remove('winner', 'loser')

})

function updateScores(player, opponent) {

  if (player.score !== roundNums && opponent.score !== roundNums) { //have to put the logic inside the event listener, this  will change what the targeted element does
    player.score += 1;
    player.display.innerText = player.score;
  }
  if (player.score === roundNums) {
    player.display.classList.add('winner');
    opponent.display.classList.add('loser');
  }
}

function reset() {
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = p1.score;
  p2.display.innerText = p2.score;
  p1.display.classList.remove('winner', 'loser')
  p2.display.classList.remove('winner', 'loser')
}


