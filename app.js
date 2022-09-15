const counter = document.querySelector('.counter-main');

const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const plusButton = document.querySelector('.plus');

minusButton.addEventListener('click', function() {
    return counter.innerHTML--;
})
plusButton.addEventListener('click', function() {
    return counter.innerHTML++;
})
resetButton.addEventListener('click', function() {
    return counter.innerHTML = 0;
})