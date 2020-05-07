let quesandanswers=[
    {
        question:"What in the recent time proved to human that they better be good wherever they find themselves",
        choice1:"COVID 1 9 (Corona Virus)",
        choice2:"Malaria",
        choice3:"HIV",
        choice4:"World War III",
        correctanswer: 1
    },
    {
        question:"Which language is used for styling web pages?",
        choice1:"Javascript",
        choice2:"React",
        choice3:"Cascading Style Sheet (CSS)",
        choice4:"Mongo DB",
        correctanswer:3
    },
    {
        question:"Which is not a JavaScript Framework?",
        choice1:"REACT",
        choice2:"Angular",
        choice3:"VUE",
        choice4:"Django",        
        correctanswer:4
    },
    {
        question:"Which is used for Connect To Database?",
        choice1:"HTML",
        choice2:"Mongo DB",
        choice3:"Python",
        choice4:"CSS",
        correctanswer:2
    },
    {
        question:"The President of the Federal Republic of Nigeria is ",
        choice1:"Babangida",
        choice2:"Nowhere to be found",
        choice3:"Obasanjo",
        choice4:"Shekau",     
        correctanswer:2
    }
];

const gameContainer=document.getElementById("game-container");
const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const nextBtn=document.getElementsByClassName("next");
const scoreDisplay=document.getElementById("score");
const progress=document.getElementById("progress");
const scorePage=document.getElementById("score-page");
const totalScoreText=document.getElementById("score-total-text");

let currentQuestion={};
let acceptingAnswers=false;
let score=0;
let questionCounter=0;
let availableQuestions=[];


//consts
const reward=1;
const maxQuestion=5;

startGame=()=>{
    questionCounter=0;
    score=0;
    availableQuestions=[...quesandanswers];

    getNewQuestion()
}

getNewQuestion=()=>{
    if(availableQuestions.length===0 || questionCounter===maxQuestion){
        //go to the end game page and display
        scorePage.style.display="block";
        gameContainer.style.display="none";
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
    //display question display progress
    progress.innerText=questionCounter + "/" + maxQuestion;
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
        getTotalScore=(total, num)=>{
            return total + num ;
        }
        item=()=>{
            incrementScore(reward).reduce(getTotalScore, 0);
        }
        let resultToDisplay="correct";
        let changeTextColor="changeTextColor"
        if(selectedAnswer == currentQuestion.correctanswer){
            resultToDisplay="correct";
            changeTextColor="changeTextColor";
            incrementScore(reward);
           
        }
        else{
            resultToDisplay="incorrect" ;
        }
      //  selectedAnswer== currentQuestion.correctanswer? "correct" : "incorrect";
        selectedChoice.classList.add(changeTextColor);
        selectedChoice.parentElement.classList.add(resultToDisplay);
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(resultToDisplay);
            selectedChoice.classList.remove(changeTextColor);
            getNewQuestion();
        }, 1000);
        
    });
});
incrementScore=(num)=>{
    score+=num;
    scoreDisplay.innerText="SCORE : " + score;   
    totalScoreText.innerText="YOU SCORED : " + score;
}
startGame();

