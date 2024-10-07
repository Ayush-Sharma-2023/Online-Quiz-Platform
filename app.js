const questions = [
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    answers: [
      { text: "String", correct: true },
      { text: "Array", correct: false },
      { text: "Object", correct: false },
      { text: "Function", correct: false },
    ],
  },
  {
    question: "Which method can be used to convert a string to an integer in JavaScript?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "toString()", correct: false },
      { text: "JSON.stringify()", correct: false },
      { text: "Number()", correct: false },
    ],
  },
  {
    question: "What will be the result of 3 + '3' in JavaScript?",
    answers: [
      { text: "'33'", correct: true },
      { text: "6", correct: false },
      { text: "'6'", correct: false },
      { text: "Syntax error", correct: false },
    ],
  },
  {
    question: "Which of the following is used to define a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      { text: "The current object", correct: true },
      { text: "The current function", correct: false },
      { text: "The global object", correct: false },
      { text: "A new object", correct: false },
    ],
  },
  {
    question: "Which of the following is a correct way to create an array in JavaScript?",
    answers: [
      { text: "var arr = []", correct: true },
      { text: "var arr = {}", correct: false },
      { text: "var arr = ()", correct: false },
      { text: "var arr = <>", correct: false },
    ],
  },
  {
    question: "What does 'null' represent in JavaScript?",
    answers: [
      { text: "No value or empty object", correct: true },
      { text: "An empty string", correct: false },
      { text: "Undefined", correct: false },
      { text: "A reference error", correct: false },
    ],
  },
  {
    question: "Which array method is used to remove the last element in JavaScript?",
    answers: [
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "splice()", correct: false },
      { text: "push()", correct: false },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      { text: "var myVar;", correct: true },
      { text: "int myVar;", correct: false },
      { text: "let myVar:", correct: false },
      { text: "variable myVar;", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    answers: [
      { text: "=", correct: true },
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "=>", correct: false },
    ],
  },
  {
    question: "What does 'NaN' mean in JavaScript?",
    answers: [
      { text: "Not-a-Number", correct: true },
      { text: "Null and Nothing", correct: false },
      { text: "New and Null", correct: false },
      { text: "Negative Number", correct: false },
    ],
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    answers: [
      { text: "Array.isArray()", correct: true },
      { text: "isArray()", correct: false },
      { text: "typeof", correct: false },
      { text: "instanceof Array", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript closure?",
    answers: [
      { text: "A function having access to the parent scope", correct: true },
      { text: "A self-invoking function", correct: false },
      { text: "A loop function", correct: false },
      { text: "An arrow function", correct: false },
    ],
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    answers: [
      { text: "() => {}", correct: true },
      { text: "function() => {}", correct: false },
      { text: "() -> {}", correct: false },
      { text: "function => {}", correct: false },
    ],
  },
  {
    question: "What is the output of `typeof NaN`?",
    answers: [
      { text: "'number'", correct: true },
      { text: "'NaN'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'object'", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "unshift()", correct: false },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
    ],
  },
  {
    question: "Which JavaScript keyword refers to the global object in a browser environment?",
    answers: [
      { text: "window", correct: true },
      { text: "global", correct: false },
      { text: "this", correct: false },
      { text: "document", correct: false },
    ],
  },
  {
    question: "What is the correct way to declare a function in JavaScript?",
    answers: [
      { text: "function myFunc() {}", correct: true },
      { text: "function: myFunc() {}", correct: false },
      { text: "var myFunc = {}", correct: false },
      { text: "myFunc() => {}", correct: false },
    ],
  },
  {
    question: "What is the result of '5' == 5 in JavaScript?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "error", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a looping structure in JavaScript?",
    answers: [
      { text: "foreach", correct: true },
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "do-while", correct: false },
    ],
  },
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else selectedBtn.classList.add("incorrect");

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

function showscore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} our of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

startQuiz();
