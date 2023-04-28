import { quizData } from "./Questions.js"; //import questions from anouther js file. this is call module
  
  const QuizScore = document.getElementById('quiz-score'); //for showing score

  const answerEls = document.querySelectorAll(".answer"); 
  
  const questionEl = document.getElementById('question');
  const text_a = document.getElementById('text_a');
  const text_b = document.getElementById('text_b');
  const text_c = document.getElementById('text_c');
  const text_d = document.getElementById('text_d');

  const submitBtn = document.getElementById('button-67');
  
  
  let currentQuiz = 0;
  let score = 0;
  
  QuizLoad();
  
  //your Quiz question load from here......................
  function QuizLoad(){

    DeSelected() //DeSelect all selected option
    
    const currentQuizData = quizData[currentQuiz];  //target to first object of array/[0]/......object == questions ok!
  
    questionEl.innerText = currentQuizData.Question;
    text_a.innerText = currentQuizData.a;
    text_b.innerText = currentQuizData.b;
    text_c.innerText = currentQuizData.c;
    text_d.innerText = currentQuizData.d;
  }  
          
  
  //if you select the option then next question appear, Unless submit button not working................................
  function getSelected(){

    let answer = undefined;
    
    answerEls.forEach((selectedAns) => { //for each answers from array
      
      if(selectedAns.checked){           //if all are checked 
         answer = selectedAns.id;        //answer is now, what you select(checked). 
      }
    });
    if(answer===undefined ){
      alert("First Click on Options");
    }
    return answer;
    
  }
  
  //Unchecked the selected option.................................
  function DeSelected(){
    answerEls.forEach((selectedAns) => { 
      selectedAns.checked = false;
    });
    
  }
  
  
  //At the you click on Submit button..................................
  submitBtn.addEventListener('click', ()=>{
    
    const answer = getSelected();
    if(answer){
      if(answer===quizData[currentQuiz].correct){ //if your selected answer is == correct answer of quizData. then score++
        score++;
        }
         currentQuiz++;   // and forward to next question.

         if(currentQuiz < quizData.length){  // at the time you have questions, your quizLoad runing, but when-- 
         QuizLoad(); 
        }else{           //--when you doesn't have questions then, score box wil appear.
       
        QuizScore.innerHTML = `<h2 class="score"> Congratulation! You Score ${score}/${quizData.length} Questions.</h2>
       <button class="nothing" onclick="location.reload()" >Restart</button>`
        
    }
      
    }
    
  });