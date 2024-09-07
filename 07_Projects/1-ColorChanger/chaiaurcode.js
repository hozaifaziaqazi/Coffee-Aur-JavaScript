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

