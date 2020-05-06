let quesandanswers=[
    {
        question:"Hyper Text Markup Language Stand For?",
        choice1:"Douglas Crockford",
        choice2:"Sheryl Sandberg",
        choice3:"Brendan Eich",
        choice4:"Brendan Eich",
        correctanswer: 1
    },
    {
        question:"Which language is used for styling web pages?",
        choice1:"Douglas Crockford",
        choice2:"Sheryl g",
        choice3:"Brendan Eich",
        choice4:"Brendan Eich",
        correctanswer:3
    },
    {
        question:"Which is not a JavaScript Framework?",
        choice1:"Douglas Crockford",
        choice2:"Sheryl Sandberg",
        choice3:"Brendan Eich",
        choice4:"Brendan ",        
        correctanswer:4
    },
    {
        question:"Which is used for Connect To Database?",
        choice1:"Douglas",
        choice2:"Sheryl Sandberg",
        choice3:"Brendan Eich",
        choice4:"Brendan Eich",
        correctanswer:2
    },
    {
        question:"question five",
        choice1:"Douglas Crockford",
        choice2:"Sheryl ",
        choice3:"Brendan Eich",
        choice4:"Brendan Eich",     
        correctanswer:2
    }
];

const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const nextBtn=document.getElementsByClassName("next");

console.log(choices);

let currentQuestion={};
let acceptingAnswers=false;
let score=0;
let questionCounter=0;
let availableQuestions=[];



//consts
const reward=5;
const maxQuestion=5;

startGame=()=>{
    questionCounter=0;
    score=0;
    availableQuestions=[...quesandanswers];
    //console.log(availableQuestions);

    getNewQuestion()
}

getNewQuestion=()=>{
    if(availableQuestions.length===0 || questionCounter===maxQuestion){
        //go to the end game page
        return window.location.assign("quiz.html");
    }
    questionCounter++;
    const questionIndex=Math.floor(Math.random() * availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice=>{
        const number=choice.dataset['indexNumber'];
        choice.innerText=currentQuestion['choice' + number];
        //console.log(choice);
    });
        //display only the number of questions in the array
    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers=true;
}

choices.forEach(choice=>{
    choice.addEventListener("click", e=>{
        if(!acceptingAnswers) return;

        acceptingAnswers=false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset['indexNumber'];
        console.log(selectedAnswer);

        //console.log(selectedAnswer == currentQuestion.correctAnswer);

        const resultToDisplay=
        selectedAnswer== currentQuestion.correctanswer? "correct" : "incorrect";
        selectedChoice.parentElement.classList.add(resultToDisplay);
        
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(resultToDisplay);
            getNewQuestion();
        }, 1500);
        
    });
});

startGame();

/*
getPrevQuestion=()=>{
    questionCounter--;
    const questionIndex=Math.floor(Math.random() * availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice=>{
        const number=choice.dataset['indexNumber'];
        choice.innerText=currentQuestion['choice' + number];
        //console.log(choice);
    });

    //display only the number of questions in the array
    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers=true;
}
*/