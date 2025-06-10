let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworHi=document.querySelector('.loworHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true  // jo ki allow karega game khelne ke lia

if(playGame){
submit.addEventListener('click',function (e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
})
}
function validateGuess(guess){
    //yeh ku ki hame guess krna ki valid number dia hai kia nhi ki value 1 ya 100 ke bich main aajye
    if(isNaN(guess)){
        alert('enter a valid number')
    }else if(guess<1){
        alert('enter a number greater then 1')
    }
    else if(guess>100){
        alert('enter a number lesser then 100')}
    else {
        prevGuess.push(guess)
        if (numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    

}

function checkGuess(guess){
    //uper wale validate to hp gya lekin koi message nhi print karaya hai
    if(guess===randomNumber){
        displayMessage("Congrtualation ! you have guess right")
        endGame()}
        else if(guess<randomNumber){
            displayMessage('number is Too low')
        }else if(guess>randomNumber){
            displayMessage('number is Too High')

    }
}
function displayGuess(guess){
// value to clean taki same value na le 
  userInput.value=''
  guessSlot.innerHTML+= `${guess} ,`;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
} 
function displayMessage(message){
    //yeh wala message directly dom ke sath interact karega
    loworHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
userInput.value= ''
userInput.setAttribute('disabled','')
p.classList.add('button')    //yha class button ki tarah behave karega
p.innerHTML=`<h2 id="newGame">Start new Game </h2>`
startOver.appendChild(p)
playGame=false
newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML='' 
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true


    })

}