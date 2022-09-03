const quizData = [
  {
    question: "How old is your lecturer?",
    a: "25",
    b: "22",
    c: "18",
    d: "I don't know",
    correct: "d",
  },
  {
    question: "What is the name of your programming lecturer?",
    a: "Miss Elizabeth",
    b: "Miss Hannah",
    c: "Miss Linda",
    d: "all of the above",
    correct: "b",
  },
  {
    question: "What semester is this?",
    a: "First",
    b: "Second",
    c: "Third",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Who is your registrar?",
    a: "Mr Dan",
    b: "Mr Jeff",
    c: "Mr Ola",
    d: "Mr Azeez",
    correct: "a",
  },
];

const question = document.getElementById("question");
const aAnswer = document.getElementById("aAnswer");
const bAnswer = document.getElementById("bAnswer");
const cAnswer = document.getElementById("cAnswer");
const dAnswer = document.getElementById("dAnswer");
const submit = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const timer = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;
let time = 10;

function loadQuiz() {
  deselectAnswer();
  countDown();

  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  aAnswer.innerText = currentQuizData.a;
  bAnswer.innerText = currentQuizData.b;
  cAnswer.innerText = currentQuizData.c;
  dAnswer.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
loadQuiz();

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const answer = getSelected();

  if (answer) {
    countDown((time = 10));
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score} of ${quizData.length} questions </h2> 
      <button class="submit" onclick="location.reload()">Ok</button>`;
      timer.style.display = "none";
    }
  }
});

//timer countdown function

function countDown() {
  if (time < 0) {
    if (currentQuiz != quizData.length) {
      clearInterval(countDown);
      time = 10;
      return loadQuiz(quizData[currentQuiz++]);
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score} of ${quizData.length} questions </h2> 
      <button class="submit" onclick="location.reload()">Ok</button>`;
      timer.style.display = "none";
    }
  } else {
    timer.innerText = time;
  }
  time--;
}
setInterval(countDown, 1000);
