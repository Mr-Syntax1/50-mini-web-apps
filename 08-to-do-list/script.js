const ulEl = document.querySelector('ul');
const inputEl = document.querySelector('input');
const addEl = document.querySelector('.add');
let tasks = [];
let completedStatus = {};  // ذخیره وضعیت خط خوردگی

loadFromLocalStorage();
renderTasks();

function loadFromLocalStorage() {
    const data = localStorage.getItem('tasks');
    if (data) {
        tasks = JSON.parse(data);
    } else {
        tasks = [];
    }

    // بارگذاری وضعیت خط خوردگی
    const savedStatus = localStorage.getItem('completedStatus');
    if (savedStatus) {
        completedStatus = JSON.parse(savedStatus);
    }
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedStatus', JSON.stringify(completedStatus));
}

function renderTasks() {
    ulEl.innerHTML = '';

    for (let task of tasks) {
        const li = document.createElement('li');

        // اعمال وضعیت خط خوردگی از روی ذخیره شده
        if (completedStatus[task]) {
            li.classList.add('completed');
        }

        const span = document.createElement('span');
        span.textContent = task;

        const button = document.createElement('button');
        button.className = 'Libutton';
        button.textContent = 'Delete';

        li.appendChild(span);
        li.appendChild(button);
        ulEl.appendChild(li);

        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'SPAN') {
                li.classList.toggle('completed');

                // ذخیره وضعیت خط خوردگی
                completedStatus[task] = li.classList.contains('completed');
                saveToLocalStorage();
            }
        });

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
                delete completedStatus[task];  // حذف وضعیت مربوط به تسک
            }
            renderTasks();
            saveToLocalStorage();
        });
    }

    saveToLocalStorage();
}

function addTask() {
    if (inputEl.value === "") {
        return;
    }

    tasks.push(inputEl.value);
    completedStatus[inputEl.value] = false;  // مقدار اولیه: انجام نشده
    inputEl.value = '';
    renderTasks();
    saveToLocalStorage();
}

addEl.addEventListener('click', () => {
    addTask();
});

inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});