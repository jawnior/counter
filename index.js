const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let counter = 0;

const decreaseNumber = () => {
    counter--;
    number.textContent = counter;
}

const resetNumber = () => {
    counter = 0;
    number.textContent = counter;
}

const increaseNumber = () => {
    counter++;
    number.textContent =+ counter;
}

decrease.addEventListener('click', decreaseNumber);
reset.addEventListener('click', resetNumber);
increase.addEventListener('click', increaseNumber);