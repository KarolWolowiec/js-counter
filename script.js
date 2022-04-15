const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

const counter = document.querySelector('.counter');

var number = 0;

increase.addEventListener('click', function(){
    number++;
    counter.textContent = number;
})
decrease.addEventListener('click', function(){
    number--;
    counter.textContent = number;
})
reset.addEventListener('click', function(){
    number = 0;
    counter.textContent = number;
})


