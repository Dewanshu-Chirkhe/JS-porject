const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000 )  //1000 ms = 1s
