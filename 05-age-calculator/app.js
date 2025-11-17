const btnEl = document.querySelector("#btn");
const birthdayEl = document.querySelector("#birthday");
const resultEl = document.querySelector("#result");


function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === "") {
        alert("Please enter your birthday");
    }else {
        const age = getage(birthdayValue);
        resultEl.textContent = `Your age is ${age} years old`;
    }
}

function getage (birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);


