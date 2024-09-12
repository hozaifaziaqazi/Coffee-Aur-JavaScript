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