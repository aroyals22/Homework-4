//variables to access the Dom elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")





var runningQuestionIndex = 0;
var lastQuestionIndex = questions.length - 1;
var currentTime = questions.length * 15;
var timeInterval;
var timeActive = false;

    function askQuestion(){
      let q = questions[runningQuestionIndex];
      question.innerHTML = "<p>" + q.question + "</p>";
      choiceA.innerHTML = q.choices[0];
      choiceA.innerHTML = q.choices[1];
      choiceA.innerHTML = q.choices[2];
      choiceA.innerHTML = q.choices[3];
    }


//add eventlistener click for start button
    //hide start div and display questions div
        //display current question
            //start timer

//add eventlistener for users answer selection
    //get users answer and compare to correct answer for current q questions[currentIndex].answer
        //if correct increment question index and display current question
        // else current time - 15s increment index and display current question




//*function to display questions
//*function for timer/start/countdown
//*function to display score