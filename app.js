
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
  p1.button.disabled = false
  p2.button.disabled = false
})

function updateScores(player, opponent) {

  if (player.score !== roundNums && opponent.score !== roundNums) { //have to put the logic inside the event listener, this  will change what the targeted element does
    player.score += 1;
    player.display.innerText = player.score;
  }
  if (player.score === roundNums) {
    player.display.classList.add('winner');
    opponent.display.classList.add('loser');
    player.button.disabled = true
    opponent.button.disabled = true
  }
}

function reset() { // refactored to loop through each players properties, instead of targeting individually
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = p.score;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false
  }
}
