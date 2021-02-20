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
  if (p1Score !== roundNums && p2Score !== roundNums) {
    p1Score += 1
    p1Display.innerText = p1Score;
  }

})


p2Point.addEventListener('click', () => {
  if (p1Score !== roundNums && p2Score !== roundNums) {
    p2Score += 1;
    p2Display.innerText = p2Score;
  }
})

resetButton.addEventListener('click', () => {
  p1Score = 0;
  p2Score = 0;
  p1Display.innerText = p1Score;
  p2Display.innerText = p2Score;
})

rounds.addEventListener('change', function () {

  roundNums = Number(this.value);

})



