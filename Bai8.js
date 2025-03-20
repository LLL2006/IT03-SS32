let tasks = [];


function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }

    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span id="task_${index}">${task}</span>
            <div>
                <button onclick="editTask(${index})">Sửa</button>
                <button onclick="deleteTask(${index})">Xóa</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    let newTask = prompt('Nhập công việc mới:', tasks[index]);

    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

function deleteTask(index) {
    let confirmDelete = confirm('Bạn có chắc chắn muốn xóa công việc này không?');
    if (confirmDelete) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}
