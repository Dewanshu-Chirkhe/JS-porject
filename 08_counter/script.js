let counter = 0;

document.getElementById("count").textContent = counter;

function display(){
    document.getElementById("count").textContent = counter;
}

document.getElementById("increment").onclick = function() {
    counter += 1;
    display();
}

document.getElementById("decrement").onclick = function () {
    counter -= 1;
    display();
};

document.getElementById("reset").onclick = function () {
    counter = 0;
    display();
};