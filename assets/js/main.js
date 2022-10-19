const inputToDo = document.querySelector('.input-to-do');
const buttonToDo = document.querySelector('.button-to-do');
const toDo = document.querySelector('.to-do');

function createLi(){
    const li = document.createElement('li');
    return li;
}

function clearInput(){
    inputToDo.value = '';
    inputToDo.focus();
}

function createButtonClear(li){
    li.innerText += ' ';
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar';
    buttonClear.setAttribute('class', 'clear');
    li.appendChild(buttonClear);
}

function createToDo(textToDo){
    const li = createLi();
    li.innerText = textToDo;
    toDo.appendChild(li);
    createButtonClear(li);
}

inputToDo.addEventListener('keypress', function(e) {
      if(e.keyCode === 13){
        if (!inputToDo.value) return;
        createToDo(inputToDo.value);
        clearInput();
    }
});

buttonToDo.addEventListener('click', function(e) {
    if (!inputToDo.value) return;
    createToDo(inputToDo.value);
    clearInput();
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('clear')) {
        el.parentElement.remove();
    }
});