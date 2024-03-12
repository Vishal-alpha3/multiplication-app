//to create a random number we use Math.random();

const num1 = Math.round(Math.random()*10);

const num2 = Math.round(Math.random()*10);

const questionEl = document.getElementById('question');

const formEl = document.getElementById("form");

const scoreEl = document.getElementById('score');

const inputEL = document.getElementById("input");

let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAnswer = num1 * num2;

formEl.addEventListener('submit', ()=>{
        const userAnswer = +inputEL.value;
        if(userAnswer === correctAnswer){
          score++;
          updateLocalStorage();
        }	
        else{
            score--;
            updateLocalStorage();
        }
});

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score));
}
