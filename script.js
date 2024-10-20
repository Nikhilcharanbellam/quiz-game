const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false },
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Quartz", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara", correct: false },
            { text: "Arabian", correct: false },
            { text: "Antarctic", correct: true },
            { text: "Gobi", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "HO", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false },
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Great white shark", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent Van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false },
        ]
    },
];

const questionE = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const next = document.getElementById("next-btn");

let index = 0;
let score = 0;

function startQuiz() {
    index = 0;
    score = 0;
    next.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion() {
    resetstate();
    let ques = questions[index];
    let no = index + 1;
    questionE.innerHTML = no + ". " + ques.question;
    ques.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.append(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate() {
    next.style.display = "none";
    while (answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e) {
    const selectbutton = e.target;
    const iscorrect = selectbutton.dataset.correct == "true";
    if (iscorrect) {
        selectbutton.classList.add("correct");
        score++;
    } else {
        selectbutton.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}

function handlenext() {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

next.addEventListener("click", () => {
    if (index < questions.length) {
        handlenext();
    } else {
        startQuiz();
    }
});

function showScore() {
    resetstate();
    questionE.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Play Again";
    next.style.display = "block";
}

startQuiz();
