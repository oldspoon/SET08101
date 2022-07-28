

let questions = [

  {
    numb: 1,
    src: "./assets/image1.jpg",
    question: "When was Bulgaria first founded?",
    answer: "Year 681",
    options: [
      "Year 723",
      "Year 629",
      "Year 681",
      "Year 657"
    ]
  },
  {
    numb: 2,
    question: "Khan Krum is having:",
    src: "./assets/image2.png",
    answer: "A fine wine from the skull of his enemy",
    options: [
      "A fine wine from the skull of his enemy",
      "A craftsman's ceramic cup",
      "An ego trip",
      "A dance macabre"
    ]
  },
  {
    numb: 3,
    question: "Tsar Boris converted the Bulgarians to Christianity in:",
    answer: "Year 864",
    src: "./assets/image3.jpg",
    options: [
      "Year 878",
      "Year 864",
      "Year 832",
      "Year 857"
    ]
  },
  {
    numb: 4,
    question: "The scholars Cyrill and Methodius are responsible for:",
    answer: "Creating the glagolica (old cyrillic) alphabet",
    src: "./assets/image4.jpg",
    options: [
      "The purging of the bolyars",
      "The erectment of St. Sofia church",
      "Creating the glagolica (old cyrillic) alphabet",
      "Discoverers of St. Nicolas island"
    ]
  },
  {
    numb: 5,
    question: "Tsar Boris has:",
    answer: "Purged the bolyars in the name of uniting the pagan tribes",
    src: "./assets/image5.jpg",
    options: [
      "Been a devout follower of pope Bogomil",
      "Been responsible for the downfall of the First Bulgarian Tsardom",
      "Purged the bolyars in the name of uniting the pagan tribes",
      "Spread belief in Tengrism"
    ]

  }
  ,{
    numb: 6,
    question: "Khan Omurtag is a:",
    answer: "Brilliant medieval engineer that has built many bridges",
    src: "./assets/image6.jpg",
    options: [
      "Brilliant medieval engineer that has built many bridges",
      "Enemy to the Byzantine Empire",
      "Friend to Germanic tribes",
      "Protector against Arabian invasions on the Byzantine"
    ]

    
  },{
    numb: 7,
    question: "Tsar Simeon is responsible for:",
    answer: "The Bulgarian golden era of education and prosperity",
    src: "./assets/image7.jpg",
    options: [
      "Funding and educating the era's most masterful blacksmiths",
      "The uniting of Southern Macedonia and Greece",
      "The downfall of the Byzantine Empire",
      "The Bulgarian golden era of education and prosperity"
    ]

    
  },{
    numb: 8,
    question: "The Failed Battle of Shipka Pass, responsible for gathering the attention of the Great Powers concluded in",
    answer: "August 1878",
    src: "./assets/image8.jpg",
    options: [
      "August 1873",
      "August 1877",
      "August 1837",
      "August 1878"
    ]

    
  },{
    numb: 9,
    question: "Hristo Botev is:",
    answer: "A Bulgarian poet and a writer",
    src: "./assets/image9.jpg",
    options: [
      "A Bulgarian poet and a writer",
      "A guerilla operative in the Ottoman Empire",
      "An Ottoman commander",
      "The Admiral of The Bulgarian Fleet"
    ]

    
  },{
    numb: 10,
    question: "The great war hero, Vasil Levski, was captured and hanged. This tragedy occured on:",
    answer: "Year 1873",
    src: "./assets/image10.jpg",
    options: [
      "Year 1873",
      "Year 1868",
      "Year 1879",
      "Year 1863"
    ]

    
  }

]

const score = document.getElementById("score");
// score.innerText = userScore;
console.log(score)

const quiz = document.querySelector(".quiz")
const question = document.querySelector("#quesBox")
const option_list = document.querySelector(".quiz-answer");
const nextBtn = document.querySelector(".next_btn")
const img = document.querySelector(".img")
const dotContainer = document.querySelector(".dots")

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let lockedQues = []

// function showResult() {
//   const score = document.getElementById("score");
//   score.innerHTML = userScore;
//   console.log(score)
// }

function optionSelected(answer) {
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length;
  if (lockedQues.includes(que_count)) return
  lockedQues.push(que_count)





  if (userAns == correcAns) { //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option


  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option


  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  // next_btn.classList.add("show"); //show the next button if user selected any option
}



function setactiveDot() {
  console.log(dotContainer)
  let list = ""
  for (let i = 0; i < questions.length; i++) {
    let className = "dot"
    if (i === que_count) {
      className = "dot active-dot"
    }
    const tag = `<span class="${className}"></span>`
    list = list + tag
  }
  dotContainer.innerHTML = list

}


// getting questions and options from array
function showQuetions(index) {
  if (img) {
    img.src = questions[index].src
  }
  let que_tag = `<span>${questions[index].question}</span>`;



  let option_tag = '<div class="option ans"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option ans"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option ans"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option ans"><span>' + questions[index].options[3] + '</span></div>';


  question.innerHTML = que_tag
  option_list.innerHTML = option_tag
  const option = option_list.querySelectorAll(".option");
  setactiveDot()

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }

}


function showResult() {
  //const cat = localStorage.getItem('result');
  window.location.href='result.html'
  // const score = document.getElementById("score");
  // score.innerText = userScore;
  // console.log(score)

}



showQuetions(0)


nextBtn.onclick = () => {
  if (que_count < questions.length - 1) {
    if(!lockedQues.includes(que_count)) rerurn //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function       
    nextBtn.classList.remove("show"); //hide the next button
    saveResult();
  } else {
    showResult(); //calling showResult function
  }
}


function saveResult() {
  sessionStorage.setItem('result', userScore);
}



