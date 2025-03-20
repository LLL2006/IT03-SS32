function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    let taskList = document.getElementById("taskList");

    if (taskValue === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let taskText = document.createElement("span");
    taskText.textContent = taskValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        let confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
        if (confirmDelete) {
            taskList.removeChild(taskDiv);
        }
    };

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);

    taskInput.value = "";
}