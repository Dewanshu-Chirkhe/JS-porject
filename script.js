const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click' , function(event) {
        body.style.backgroundColor = event.target.id;
    })
})