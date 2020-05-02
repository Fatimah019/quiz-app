const quesandanswers=[
    {
        "questionNumber":"1",
        "question":"Hyper Text Markup Language Stand For?",
        "correct answer":"b",
        "options":{
            "a":"answer 1",
            "b":"answer 2",
            "c":"answer 3",
            "d":"answer 4"
        }
    },
    {
        "questionNumber":"2",
        "question":"Which language is used for styling web pages?",
        "correct answer":"b",
        "options":{
            "a":"answer 1",
            "b":"answer 2",
            "c":"answer 3",
            "d":"answer 4"
        }
    },
    {
        "questionNumber":"3",
        "question":"Which is not a JavaScript Framework?",
        "correct answer":"b",
        "options":{
            "a":"answer 1",
            "b":"answer 2",
            "c":"answer 3",
            "d":"answer 4"
        }
    },
    {
        "questionNumber":"4",
        "question":"Which is used for Connect To Database?",
        "correct answer":"b",
        "options":{
            "a":"answer 1",
            "b":"answer 2",
            "c":"answer 3",
            "d":"answer 4"
        }
    },
    {
        "questionNumber":"5",
        "question":"question five",
        "correct answer":"b",
        "options":{
            "a":"answer 1",
            "b":"answer 2",
            "c":"answer 3",
            "d":"answer 4"
        }
    }
];


//display questions in the question container

const displayQuestions=()=>{
    quesandanswers.forEach(ques=>{
        let questionsContainer=document.getElementById('question-container');

        let questionNumber=document.createElement("h3");
        questionNumber.textContent=ques.questionNumber;
        questionNumber.setAttribute('id', 'qus-no');

        let questionsDisplay=document.createElement('h3');
        questionsDisplay.textContent=ques.question;
        questionsDisplay.setAttribute('id', 'questions-display');
        
        //append questions and number label to the question container
        questionsContainer.appendChild(questionNumber);
        questionsContainer.appendChild(questionsDisplay);
        
        
    });

}
displayQuestions();

var currQues=0;
function nextQues(){
    currQues++;
    let questionsContainer=document.getElementById('question-container');

    let questionNum=document.createElement("h3");
    questionNum.setAttribute('id', 'qus-no');

    if(currQues>=quesandanswers.length){
        currQues=1;
        questionNum.innerHTML=currQues.questionNumber;
        questionsContainer.appendChild(questionNum);
    }
}
nextQues();