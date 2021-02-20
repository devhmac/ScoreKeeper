//inputs
const p1Point = document.querySelector('#p1Point');
const p2Point = document.querySelector('#p2Point');
const resetButton = document.querySelector('#reset');
const rounds = document.querySelector('#rounds');
//values
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let roundNums = Number(rounds.value);





p1Point.addEventListener('click', () => {
  if (p1Score !== roundNums && p2Score !== roundNums) { //have to put the logic inside the event listener, this  will change what the targeted element does
    p1Score += 1
    p1Display.innerText = p1Score;
  }
  if (p1Score === roundNums) {
    p1Display.classList.add('winner');
    p2Display.classList.add('loser');
  }
})


p2Point.addEventListener('click', () => {
  if (p1Score !== roundNums && p2Score !== roundNums) {
    p2Score += 1;
    p2Display.innerText = p2Score;
  }
  if (p2Score === roundNums) {
    p2Display.classList.add('winner');
    p1Display.classList.add('loser');
  }
})

resetButton.addEventListener('click', reset)

rounds.addEventListener('change', function () {

  roundNums = Number(this.value);
  p1Display.classList.remove('winner', 'loser')
  p2Display.classList.remove('winner', 'loser')

})

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.innerText = p1Score;
  p2Display.innerText = p2Score;
  p1Display.classList.remove('winner', 'loser')
  p2Display.classList.remove('winner', 'loser')
}


