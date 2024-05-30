
let questions = [
    {
    numb: 1,
    question: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    answer: "Hyper Text Markup Language",
    options: [
      "Never", 
      "Rarely",
      "Sometimes",
      "Often",
      "Very often"
    ]
  },
    {
    numb: 2,
    question: "How often do you have difficulty getting things in order when you have to do a task that requires organisation?",
    answer: "Cascading Style Sheet",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 3,
    question: "How often do you have problems remembering appointments or obligations?",
    answer: "Hypertext Preprocessor",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 4,
    question: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    answer: "Structured Query Language",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 5,
    question: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    answer: "eXtensible Markup Language",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
  

     {
     numb: " How often do you feel overly active and compelled to do things, like you were driven by a motor?",
     question: "Your Question is Here",
     options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
   },
];

let questionsB = [
    {
    numb: 1,
    question: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
    answer: "Hyper Text Markup Language",
    options: [
      "Never", 
      "Rarely",
      "Sometimes",
      "Often",
      "Very often"
    ]
  },
    {
    numb: 2,
    question: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
    answer: "Cascading Style Sheet",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 3,
    question: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    answer: "Hypertext Preprocessor",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 4,
    question: "How often do you misplace or have difficulty finding things at home or at work?",
    answer: "Structured Query Language",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 5,
    question: " How often are you distracted by activity or noise around you?",
    answer: "eXtensible Markup Language",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
  

     {
     numb: 6,
     question: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
     options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
   },
];


let questionsC = [
    {
    numb: 1,
    question: "How often do you feel restless or fidgety?",
    answer: "Hyper Text Markup Language",
    options: [
      "Never", 
      "Rarely",
      "Sometimes",
      "Often",
      "Very often"
    ]
  },
    {
    numb: 2,
    question: "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    answer: "Cascading Style Sheet",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 3,
    question: "How often do you find yourself talking too much when you are in social situations?",
    answer: "Hypertext Preprocessor",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 4,
    question: "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    answer: "Structured Query Language",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
    {
    numb: 5,
    question: " How often do you have difficulty waiting your turn in situations when turn-taking is required?",
    answer: "eXtensible Markup Language",
    options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
  },
  

     {
     numb: 6,
     question: " How often do you interrupt others when they are busy?",
     options: [
        "Never", 
        "Rarely",
        "Sometimes",
        "Often",
        "Very often"
      ]
   },
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
// const time_line = document.querySelector("header .time_line");
// const timeText = document.querySelector(".timer .time_left_txt");
// const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter

}

// let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    // timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine

    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine

        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    // Remove existing coloring from all options
    for(let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.remove("correct", "incorrect");
    }

    // Determine the score based on the selected option
    let selectedOptionIndex = Array.from(answer.parentElement.children).indexOf(answer) + 1;
    userScore += selectedOptionIndex;

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}
