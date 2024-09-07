# DOM Projects

## Project Link

- [StackBlitz](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Projects List

1. [Color Changer](./1-colorChanger/index.html)

## Solution Code

### Project 1: Color Changer

#### HTML

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

#### CSS

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

#### JavaScript

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
