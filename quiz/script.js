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

let currentQuiz = 0;

loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  aAnswer.innerText = currentQuizData.a;
  bAnswer.innerText = currentQuizData.b;
  cAnswer.innerText = currentQuizData.c;
  dAnswer.innerText = currentQuizData.d;
}


submit.addEventListener("click", () => {
  currentQuiz++;
  loadQuiz();
});
