<br>

# DOM Projects

## Project Link

#### [StackBlitz](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Projects List

1. [Color Changer](/07_Projects/1-ColorChanger/index.html)
2. [BMI Calculator](/07_Projects/2-BMICalculator/index.html)
3. [Digital Clock](/07_Projects/3-DigitalClock/index.html)

<hr>
<br>
<br>

# Solution Code

### Project 1: Color Changer

<details><summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a id="link" href="/" aria-current="page">Home</a>
      <a id="link" target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <button class="reset" id="reset">Reset</button>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>
```

</details>

<details><summary>CSS</summary>

```css
html {
  margin: 0;
}

body {
  background: #212121;
  color: white;
}

span {
  display: block;
}

#link{
  background-color: #212121;
  color: #ffff;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 25px;
  margin: 10px;
  border-style: solid;
  border-radius: 5px;
  font-size: 15px;
  margin-left: 246px;
}

.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#reset {
  background: #212121;
  color: white;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
```

</details>

<details>
<summary>JavaScript</summary>

```javascript
const buttons = document.querySelectorAll('.button');
const reset = document.querySelectorAll('.reset');
const body = document.querySelector('body');


reset.forEach(resetbtn => {
    console.log(resetbtn);
    resetbtn.addEventListener("click", (a) => {
        console.log(a);
        console.log(a.target);
        body.style.backgroundColor = '#212121';
        body.style.color = '#fff';
    })
})


// if else method
buttons.forEach(button => {
    console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color = '#212121';
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            body.style.color = '#212121';
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = '#212121';
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = '#212121';
        }
    })
})
```

</details>

<hr>

### Project 2: BMI Calculator

<details>

<summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1 id="heading">BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>
```
</details>

<details>
<summary>CSS</summary>

```css
.container {
  width: auto;
  height: 525px;

  background-color: #797978;
  padding-left: 60px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 30px;
  margin-left: 30px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;
  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
}
```
</details>

<details>
<summary>JavaScript</summary>

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    // if (height,weight === 0 || height, weight < 0 || isNaN(height,weight)) {
    //     results.innerHTML = `Please give a valid height and weight ${weight}`
    // } else
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height `
    } else if (weight === 0 || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight `
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            results.innerHTML = `<span> Under Weight  ${bmi} </span>`
            
        } else if (bmi <= 24.9) {
            results.innerHTML = `<span> Normal Weight  ${bmi} </span>`
            
        } else {
            results.innerHTML = `<span> Overweight  ${bmi} </span>`
            
        }
    }


    
})
```

</details>

<hr>

### Project 3: Digital Clock

<details>

<summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div id="all">
      <div id="banner">
        <span id="titleDate">Local Date</span>
        <span id="titleTime">Local Time</span>
      </div>
      <div class="center">
        <div id="date"></div>
        <div id="clock"></div>
      </div>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>CSS</summary>

```css
body {
    background-color: #212121;
    color: #fff;
}

#all {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
}

#clock {
    font-size: 40px;
    background-color: orange;
    padding: 20px 50px;
    padding-right: 30px;
    padding-left: 30px;
    margin-top: 30px;
    border-radius: 10px;
    margin-left: 10px;
}

#date {
    font-size: 40px;
    background-color: orange;
    padding: 20px 50px;
    padding-right: 13px;
    padding-left: 15px;
    margin-top: 30px;
    border-radius: 10px;
    margin-right: 10px;
}

#titleDate {
    margin-right: 30px;
    padding-left: 20px;
    padding-right: 20px;
}

#titleTime {
    margin-left: 30px;
    padding-left: 20px;
    padding-right: 20px;
}

#banner {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
```
</details>

<details>
<summary>JavaScript</summary>

```javascript
const clock = document.getElementById('clock');
const date = document.getElementById('date');
// const clock = document.querySelector('#clock');


setInterval(() => {
    newTime = new Date();
    clock.innerHTML = newTime.toLocaleTimeString();
}, 1000)

setInterval(() => {
    newDate = new Date();
    date.innerHTML = newDate.toLocaleDateString()
}, 1000)
```

</details>

<hr>

### Project 4: Guess The Number

<details><summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
  <div id="wrapper">
    <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
              <br>
              <input type="text" id="guessField" class="guessField">
              <br>
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span  class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```

</details>

<details><summary>CSS</summary>

```css
html {
  font-family: sans-serif;
}

body {
  /* width: 1000px;
  max-width: 750px;
  min-width: 480px; */
  margin: 0 auto;
  background-color: #121212;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  /* margin-top: 50px; */
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 45px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: auto;
  height: 560px;
  background-color: #454545;
  color: #fff;
  font-size: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 8px;
}

h1 {
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 40px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  margin: 0 auto; /* Center the h1 horizontally */
}


p {
  font-size: 16px;
  text-align: center;
}
```

</details>

<details>
<summary>JavaScript</summary>

```javascript
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
```

</details>

<hr>