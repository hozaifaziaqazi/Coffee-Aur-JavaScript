// genrate random colors

const randomColor = () => {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID = undefined

let startChanchingColor = () => {
    if (!intervalID) {
        intervalID = setInterval(colorChanging, 1000);
    }
    function colorChanging(){document.body.style.backgroundColor = randomColor();}
};

let stopChanchingColor = () => {
    clearInterval(intervalID);
    intervalID = null
};

document.getElementById('start').addEventListener('click', startChanchingColor);

document.getElementById('stop').addEventListener('click', stopChanchingColor);