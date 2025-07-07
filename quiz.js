const allQuestions = [
  // HTML Questions (1–10)
  {
    id: 1,
    category: "HTML",
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
    answer: "HyperText Markup Language",
  },
  {
    id: 2,
    category: "HTML",
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>",
  },
  {
    id: 3,
    category: "HTML",
    question: "Which attribute is used to provide an image source?",
    options: ["alt", "src", "href", "link"],
    answer: "src",
  },
  {
    id: 4,
    category: "HTML",
    question: "Which HTML tag is used for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    answer: "<br>",
  },
  {
    id: 5,
    category: "HTML",
    question: "What is the correct doctype declaration for HTML5?",
    options: ["<!DOCTYPE html>", "<!HTML5>", "<!DOCTYPE HTML5>", "<!HTML>"],
    answer: "<!DOCTYPE html>",
  },
  {
    id: 6,
    category: "HTML",
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    id: 7,
    category: "HTML",
    question: "Which tag is used to define a table row?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    answer: "<tr>",
  },
  {
    id: 8,
    category: "HTML",
    question: "Which element is used to input text in a form?",
    options: ["<input type='text'>", "<form>", "<textarea>", "<text>"],
    answer: "<input type='text'>",
  },
  {
    id: 9,
    category: "HTML",
    question: "Which tag is used to display a heading?",
    options: ["<head>", "<h1> to <h6>", "<title>", "<heading>"],
    answer: "<h1> to <h6>",
  },
  {
    id: 10,
    category: "HTML",
    question: "What does the <meta> tag do?",
    options: ["Provides metadata", "Displays an image", "Adds a comment", "Creates a link"],
    answer: "Provides metadata",
  },

  // CSS Questions (11–20)
  {
    id: 11,
    category: "CSS",
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    id: 12,
    category: "CSS",
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size", "font-style"],
    answer: "font-size",
  },
  {
    id: 13,
    category: "CSS",
    question: "How do you apply a class selector in CSS?",
    options: [".classname", "#classname", "*classname", "classname"],
    answer: ".classname",
  },
  {
    id: 14,
    category: "CSS",
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bg-color", "background"],
    answer: "background-color",
  },
  {
    id: 15,
    category: "CSS",
    question: "How do you make a text bold in CSS?",
    options: ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "bold: true;"],
    answer: "font-weight: bold;",
  },
  {
    id: 16,
    category: "CSS",
    question: "Which unit is relative to the parent element's font size?",
    options: ["em", "px", "%", "vh"],
    answer: "em",
  },
  {
    id: 17,
    category: "CSS",
    question: "Which property is used to set the spacing between lines of text?",
    options: ["line-height", "spacing", "letter-spacing", "padding"],
    answer: "line-height",
  },
  {
    id: 18,
    category: "CSS",
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "*demo", "demo"],
    answer: "#demo",
  },
  {
    id: 19,
    category: "CSS",
    question: "What is the default position value of an element?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
  },
  {
    id: 20,
    category: "CSS",
    question: "Which property controls the order of overlapping elements?",
    options: ["z-index", "stack-order", "overlap", "priority"],
    answer: "z-index",
  },

  // JavaScript Questions (21–30)
  {
    id: 21,
    category: "JavaScript",
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "Oracle"],
    answer: "Netscape",
  },
  {
    id: 22,
    category: "JavaScript",
    question: "Which keyword is used to declare a constant?",
    options: ["const", "let", "var", "static"],
    answer: "const",
  },
  {
    id: 23,
    category: "JavaScript",
    question: "How do you write a comment in JavaScript?",
    options: ["// comment", "<!-- comment -->", "# comment", "/* comment"],
    answer: "// comment",
  },
  {
    id: 24,
    category: "JavaScript",
    question: "Which method is used to convert JSON to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    answer: "JSON.parse()",
  },
  {
    id: 25,
    category: "JavaScript",
    question: "What is the output of typeof null?",
    options: ["object", "null", "undefined", "boolean"],
    answer: "object",
  },
  {
    id: 26,
    category: "JavaScript",
    question: "What does NaN stand for?",
    options: ["Not a Number", "New and Null", "Number and Name", "Null and Nothing"],
    answer: "Not a Number",
  },
  {
    id: 27,
    category: "JavaScript",
    question: "Which symbol is used for strict equality?",
    options: ["===", "==", "!=", "!=="],
    answer: "===",
  },
  {
    id: 28,
    category: "JavaScript",
    question: "What is a closure in JavaScript?",
    options: [
      "A function inside another function that remembers its scope",
      "A loop inside another loop",
      "A function with no return value",
      "A variable defined in global scope",
    ],
    answer: "A function inside another function that remembers its scope",
  },
  {
    id: 29,
    category: "JavaScript",
    question: "Which method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()",
  },
  {
    id: 30,
    category: "JavaScript",
    question: "What is the result of 2 + '2'?",
    options: ["'22'", "4", "NaN", "Error"],
    answer: "'22'",
  },

  // React Questions (31–40)
  {
    id: 31,
    category: "React",
    question: "What is React primarily used for?",
    options: ["Building user interfaces", "Handling databases", "Styling web pages", "Routing"],
    answer: "Building user interfaces",
  },
  {
    id: 32,
    category: "React",
    question: "What is a component in React?",
    options: ["A reusable piece of UI", "A database schema", "A CSS class", "A backend module"],
    answer: "A reusable piece of UI",
  },
  {
    id: 33,
    category: "React",
    question: "Which hook is used for state in a functional component?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useState",
  },
  {
    id: 34,
    category: "React",
    question: "What is JSX?",
    options: ["JavaScript XML", "Java Standard Extension", "JavaScript Expression", "JSON with XML"],
    answer: "JavaScript XML",
  },
  {
    id: 35,
    category: "React",
    question: "Which method is used to pass data to child components?",
    options: ["Props", "State", "Emit", "Context"],
    answer: "Props",
  },
  {
    id: 36,
    category: "React",
    question: "What does the useEffect hook do?",
    options: ["Performs side effects", "Declares state", "Creates components", "Manages styles"],
    answer: "Performs side effects",
  },
  {
    id: 37,
    category: "React",
    question: "What is a key prop used for?",
    options: ["Identifying elements in a list", "Styling elements", "Creating event listeners", "Passing props"],
    answer: "Identifying elements in a list",
  },
  {
    id: 38,
    category: "React",
    question: "Which command creates a new React app?",
    options: ["npx create-react-app myApp", "npm install react", "npm start react", "react-new myApp"],
    answer: "npx create-react-app myApp",
  },
  {
    id: 39,
    category: "React",
    question: "Which of these is a valid React fragment?",
    options: ["<> </>", "<fragment></fragment>", "<div></div>", "<React.Fragment></React.Fragment>"],
    answer: "<> </>",
  },
  {
    id: 40,
    category: "React",
    question: "How do you update state in React?",
    options: ["By calling the setState or setFunctionName", "By directly modifying the state", "Using props", "Using context"],
    answer: "By calling the setState or setFunctionName",
 }
];

function getName(event){
 event.preventDefault();   //Stop refresh page
console.log("00")
}
   let paragraphCreated = false;
function enterName(){

  let userName= document.getElementById('name')
  const text = userName.value.trim();
  // if(!text)  alert("please enter name") ;

if(!paragraphCreated){

  if(text) {
    
    const p = document.createElement('p');
    p.textContent =`${text} let's start quiz`;
    p.style.marginTop='0.5rem'
    
    document.getElementById('p').appendChild(p)
    paragraphCreated = true;
    console.log("01")
    //  userName.value = '';
    return false
  }
}
  }


  let timer;
  let timeLeft;

  function startTimer(){

    timeLeft = 15;
    document.getElementById('time').textContent = timeLeft;
    timer =setInterval(()=>{
      timeLeft--;
      document.getElementById('time').textContent = timeLeft;

      if(timeLeft <= 0){
        clearInterval(timer);
        handleTimeout();
      }
    },1000);
  }
  function handleTimeout(){
    nextBtn.click();
  }

  let currentCategory =''
  function quizCategory(cat){

currentCategory=cat;
     let userAnswers =[];
     const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name before selecting a category.");
    return;
  }
   
    document.getElementById('quiz-container').style.display ='none'

    const quizDiv = document.getElementById('quiz');
    quizDiv.style.display ='inline-block';
    quizDiv.className='questionBg'

    const questions = allQuestions.filter(q=>q.category === cat);
    let currentIndex =0 ;
    console.log("1")
      
   const qText = document.getElementById('questionText');

    const nextBtn = document.getElementById('nextBtn');

    render();
  
  
  function displayScore(){

   const scoreContainer = document.createElement('div')
   scoreContainer.className ='score-container';
   scoreContainer.id ='score-container'
   
   const heading = document.createElement('h2');
   heading.textContent = 'Quiz Result';
   heading.id='scoreHeading'
   scoreContainer.appendChild(heading);


   const userName = document.getElementById('name').value.trim();
   const namePara = document.createElement('p');
   namePara.textContent = `  ${userName} Your Result Is:`;
   namePara.id ='nameScore'
  
   scoreContainer.appendChild(namePara);

   const totalQuestions = questions.length;
   const attemptedCount = userAnswers.length;
   


const correctAnswers = userAnswers.filter((ans, idx) => ans === questions[idx].answer).length;
const incorrectAnswers = attemptedCount - correctAnswers;

 const percentage = correctAnswers*10;


   const totalPara = document.createElement('p');
   totalPara.textContent = `Total Questions:${totalQuestions}`;
   scoreContainer.appendChild(totalPara);

  const attemptPara = document.createElement('p');
  attemptPara.textContent = `Attempted :${attemptedCount}`;
  scoreContainer.appendChild(attemptPara);
 
  
   const correctPara =document.createElement('p');
   correctPara.textContent = `Correct: ${correctAnswers}`;
   scoreContainer.appendChild(correctPara);

   const incorrectPara = document.createElement('p');
   incorrectPara.textContent =`Incorrect:${incorrectAnswers}`;
   scoreContainer.appendChild(incorrectPara);

  const percentagePara =document.createElement('p');
  percentagePara.textContent = `Total Percentage : ${percentage}%`
  scoreContainer.appendChild(percentagePara)
   console.log("scorecrd")

    document.body.appendChild(scoreContainer);

    
    
    const buttonContainer = document.createElement('div');
buttonContainer.id = 'score-buttons';
buttonContainer.style.marginTop = '1rem';

// Home Button
const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.id = 'homeBtn';
homeBtn.onclick = () => {
  location.reload();
  ;
};

// Play Again Button
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
playAgainBtn.id = 'playAgainBtn';
playAgainBtn.onclick = () => {


  scoreContainer.remove();
  quizCategory(currentCategory); 
  document.getElementById('Score').textContent = 'Score: 0';
};

buttonContainer.appendChild(homeBtn);
buttonContainer.appendChild(playAgainBtn);
scoreContainer.appendChild(buttonContainer);


   }



    function render(){
      
      const q = questions[currentIndex];

      
      const categoryHeading = document.getElementById('categoryHeading');
categoryHeading.textContent = ` ${q.category}`;

  
      qText.textContent = ` Que ${currentIndex +1}:${q.question}`;
       
      qText.className='questyle'
      optionList.innerHTML = '';

      q.options.forEach(opt=>{
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className='optionbtn';
        console.log("2")
       
       

        btn.addEventListener('click',() => {

             // Remove active from all
          optionList.querySelectorAll('.optionbtn').forEach(b=>b.classList.remove('active'));
            // add only to clicked
          btn.classList.add('active');
          userAnswers[currentIndex]= btn.textContent;
          // nextBtn.disabled = false;
        });
        
        
        optionList.appendChild(btn);
      });
     
      

      nextBtn.textContent ='Next';
      nextBtn.className ='nextbtnStyle'

      startTimer();
    } 
    let score =0;

    

    nextBtn.onclick =()=>{
      

      clearInterval(timer);

     const sel = optionList.querySelector('.optionbtn.active');
      // if(!sel){alert('sekect an answer');return};
      if(sel && sel.textContent === questions[currentIndex].answer) {score++; } 

      const Score =document.getElementById('Score')
     Score.textContent = ` Score: ${score}`

      currentIndex++;
      if(currentIndex < questions.length) {render()}
      else {finishQuiz()}

    function finishQuiz(){
    console.log("yyyy")
    if(document.getElementById('end-quiz')){
      return;
    }
      const endQuiz =document.createElement('button');
      endQuiz.textContent ="End Quiz & View Score" 
      endQuiz.className="endquizbutton";
      endQuiz.id ='end-quiz'
      document.body.appendChild(endQuiz);

      endQuiz.addEventListener('click',()=>{
        // alert('Quiz has ended');
        document.getElementById('quiz').style.display='none'
        document.getElementById('end-quiz').style.display='none'
        console.log("endquiz")
        displayScore();
        
      });
    }
    };

   
  }
  
  