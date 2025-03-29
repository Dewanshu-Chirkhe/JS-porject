let intervalId;

//generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; //random index
    }
    return color;
};

const startChangingColor = function () {
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }

    if(!intervalId){
        intervalId = setInterval(changeColor, 100);
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
