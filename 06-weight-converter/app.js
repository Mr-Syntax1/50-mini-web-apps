const inputEl = document.querySelector('.input');
const outputEl = document.querySelector('#output');
const errorEl = document.querySelector('.error')

let errorTime;
let outputTime;

function updateResult(){
    if(inputEl.value < 0 || isNaN(inputEl.value)){
        errorEl.style.display = 'flex';
        errorEl.innerText = 'Please enter a positive number';
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorEl.style.display = 'none';
            inputEl.value = '';
        }, 4000);
    }else{
        errorEl.style.display = 'none';
        outputEl.innerText = (+inputEl.value /  2.2).toFixed(2);

        clearTimeout(outputTime);
        outputTime = setTimeout(() => {
            errorEl.style.display = 'none';
            inputEl.value = '';
        }, 10000);
    }
}


inputEl.addEventListener('input',updateResult);