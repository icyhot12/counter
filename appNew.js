const counter = document.querySelector('.counter-main');

const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const plusButton = document.querySelector('.plus');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(element => {
    element.addEventListener('click', function() {
        if(element.classList.contains("minus")) {
            return counter.innerHTML--;
        } else if (element.classList.contains("plus")) {
            return counter.innerHTML++;
        } else {
            return counter.innerHTML = 0;
        }
    })
})