
const score = document.getElementById("score");
const barbarian = document.getElementById("barbarian");
const btn = document.querySelector(".btn");



function showResultInUI() {
  const result = parseInt(sessionStorage.getItem('result'));
  score.innerText = result;
  console.log("barbarian", barbarian,result, typeof result )
  if (result <= 3) {
    barbarian.innerText = " You Are Not A Bulgarian Barbarian"
  } else if (result>3 &&result<7) {
    barbarian.innerText = " You Are On The Correct Path"
  } else if (result >= 7) {
    barbarian.innerText = "  You Are A Bulgarian barbarian "
  }
}

showResultInUI();

btn.addEventListener("click", () => {
  window.location.href='index.html'
})