let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number')
    } else if (guess < 1) {
        alert('Please Enter a Number More Then 1')
    }
    else if (guess > 100) {
        alert('Please Enter a Number Less Then 100')
    } else{
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
};

const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`Correct! You guessed the number ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Too Low!`)
    } else if (guess > randomNumber) {
        displayMessage(`Too High!`)
    }
};

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
};

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
};


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 style="background-color: #191919; display: flex; justify-content: center; align-items: center; color: #ffffff; width: 200px; height: 35; border-radius: 10px; font-size: 20px; border-style: none; margin: 0 auto;" id="newGame" >Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
};

function newGame() {
    const newGameButton = document.getElementById("newGame")
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1 
        guessSlot.innerHTML = ''
        remaning.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
};
