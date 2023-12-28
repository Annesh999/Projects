const questions=[
    { question:"Which is the largest animal in the world?",
      answers:[
        {text:"shark", correct:false},
        {text:"Blue whale", correct:true},
        {text:"Elephant", correct:false},
        {text:"giraffe", correct:false},
      ]
    },

    { question:"India has largest deposits of ____ in the world.",
    answers:[
      {text:"mica", correct:true},
      {text:"gold", correct:false},
      {text:"copper", correct:false},
      {text:"dimond", correct:false},
    ]
  },

  { question:"Which Indias first Supercomputer?",
    answers:[
      {text:"AIRAWAT", correct:false},
      {text:"PRATUYSH", correct:false},
      {text:"MIHIR", correct:true},
      {text:"PARAM8000", correct:false},
    ]
  },

  { question:"Who is the Father of JavaScript?",
    answers:[
      {text:"James Gosling", correct:false},
      {text:"Guido van Rossum", correct:false},
      {text:"Bjarne Stroustrup", correct:false},
      {text:"Brendan Eich", correct:true},
    ]
  }

]

const QuestionElement= document.getElementById('Question');
const answersButton= document.getElementById('Answers');
const nextButton= document.getElementById('nextBtn');
const qnum=document.getElementById('QuestionNo');
const topscore=document.getElementById('Score');
let currentIndex=0;
let score=0;
console.log(score);


function startQuiz(){
    currentIndex=0;
    score=0;
    showQuestion();
}
function showQuestion(){
     resetAnswers();
    let currentQuestion=questions[currentIndex];
    let index=currentIndex+1;
    QuestionElement.innerText= index+") "+currentQuestion.question;
    qnum.innerText=`Question ${index}/${questions.length}`

    currentQuestion.answers.forEach( (Element)=>{
       let create=document.createElement('button');
       create.innerHTML=Element.text;
       create.classList.add('btn');
       answersButton.append(create);
    //    here a problem come the options are not align properly it display under the staring buttons 
    //    so we need first remove them every time nither it shown all the question of the eaxm
    //     under one after another .. so we have to clear first so i am creating fuction name resetanwer

    if(Element.correct){
      create.dataset.correct=Element.correct;
    }

    // create.addEventListener("click",selectAnswer);
    // answersButton.addEventListener("click",selectAnswer);
});
   answersButton.addEventListener("click",selectAnswer);

}


function selectAnswer(e){
  const selectBtn=e.target;
console.log(selectBtn.dataset);
// let isCorrect=selectBtn.dataset;
if(selectBtn.dataset.correct){
    selectBtn.classList.add("correct");
    score++;
    topscore.innerText= `score:${score}`;

}
else{
    selectBtn.classList.add("incorrect");
}
Array.from(answersButton.children).forEach(button=>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled=true;
});

nextButton.style.display="block";

}

function resetAnswers(){
    nextButton.style.display="none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }
}
function showscore(){
    resetAnswers();
    QuestionElement.innerText=`Your score ${score} out of ${questions.length}`
    nextButton.innerText="playAgain"
    nextButton.style.display="block";
}


console.log(currentIndex);

function handelNextButton(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}

nextButton.addEventListener("click",()=>{
  console.log(currentIndex+1);

    if(currentIndex < questions.length){
        handelNextButton();
    }
    else{
        startQuiz();
    }
})




startQuiz();
