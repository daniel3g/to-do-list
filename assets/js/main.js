const inputToDo = document.querySelector('.input-to-do');
const buttonToDo = document.querySelector('.button-to-do');
const toDo = document.querySelector('.to-do');

buttonToDo.addEventListener('click', function(e) {
    if (!inputToDo.value) return;
    console.log(inputToDo.value);
});