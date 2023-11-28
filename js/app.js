const questions = [
  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ],
  },

  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ],
  },

  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ],
  },

  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const anwserBtns = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    anwserBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
  });
}


function resetState(){
  nextBtn.style.display = "none";
  while (anwserBtns.firstChild) {
    anwserBtns.removeChild(anwserBtns.firstChild);
  }
}  


function selectedAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } 
  else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(anwserBtns.children).forEach(button =>{
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}


function  showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", ()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } 
  else {
    startQuiz();
  }
});


startQuiz();