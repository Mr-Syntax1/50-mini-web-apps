const buttonsEl = document.querySelectorAll('.buttons button');
const inputfieldEl = document.getElementById('result');

for (let i = 0; i < buttonsEl.length ; i++){
    buttonsEl[i].addEventListener('click', () => {
        const buttonValue = buttonsEl[i].innerText;
        if(buttonValue === 'C'){
            clearResult();
        }else if(buttonValue === '='){
            calculateResult();
        } else{
            appendvalue(buttonValue);
        }
    })
}

function clearResult(){
    inputfieldEl.value = '';
}

function calculateResult(){
    inputfieldEl.value = eval(inputfieldEl.value);
}

function appendvalue(buttonValue){
    inputfieldEl.value += buttonValue
    // inputfieldEl.value = inputfieldEl.value + buttonValue
}
