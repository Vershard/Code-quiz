
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0; 

var questions = [
  {
      question: "What is the capitol of Virginia?",
      a: "Richmond",
      b: "Norfolk",
      c: "Hampton",
      d: "Petersburg", 
      answer: "A"
    },
  {
      question: "What is Virginia's baseball team?",
      a: "Rams",
      b: "Ducks",
      c: "Spiders", 
      d: "Nationals", 
      answer: "D"
    },
  {
      question: "Where is VCU located?",
      a: "Norfolk",
      b: "Richmond",
      c: "Hampton",
      d: "Williamsburg", 
      answer: "B"
    } 
 
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    
    pos = 0;
    correct = 0;
    
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c; 
  chD = questions[pos].d; 
  
  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>"; 
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos].answer){
   
    correct++;
  }
 
  pos++;
  
  renderQuestion();
}

window.addEventListener("load", renderQuestion); 


   window.addEventListener("keyup", ev => {
    if (ev.keyCode === 38) 
    {
      document.body.innerHTML = "<h1 id='gameOver'>Game Over!  1 out of 3= 33%  2 out of 3= 66% 3 out of 3= 100% </h1>"
    } 
    
  }) 