function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value) {
        var taskItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        var taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = taskInput.value;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}