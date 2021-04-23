const quizData = [
    {
        question: "How old are you?",
        a:"10",
        b:"20",
        c:"30",
        d:"40",
        answer:"b"
    },
    {
        question:"what do you make now?",
        a:"ans1",
        b:"ans2",
        c:"ans3",
        d:"ans4",
        answer:"b"
    }
]

const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const question = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const answerEls = document.getElementsByName("answer");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

function deSelected(){
    answerEls.forEach(answer =>{
        answer.checked = false;
    })
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected();
    console.log(answer);

    if(answer == quizData[currentQuiz].answer){
        score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
        deSelected();
    }
    else{
        quiz.innerHTML=`<h1>Your score is ${score}/${quizData.length}</h2>`;
    }
    
})
