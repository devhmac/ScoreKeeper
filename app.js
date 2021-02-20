//inputs
const p1Point = document.querySelector('#p1Point');
const p2Point = document.querySelector('#p2Point');
const resetButton = document.querySelector('#reset');
const rounds = document.querySelector('#rounds')
//values
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');


rounds.addEventListener('change', (e) => {
  console.log(Number(rounds.value));
})

p1Point.addEventListener('click', () => {
  addPoint(p1Score);
})

p2Point.addEventListener('click', () => {
  addPoint(p2Score);
})

resetButton.addEventListener('click', () => {
  p1Score.innerText = 0
  p2Score.innerText = 0
})


function addPoint(playerScore) {
  playerScore.innerHTML = Number(playerScore.innerHTML) + 1
}


