let taskInput = document.getElementById("new-task");
let addButton = document.getElementById("addTask");
let incompleteTasks = document.getElementById("incomplete-tasks");
let completedTasks = document.getElementById("completed-tasks");
let clearButton = document.getElementById("clear");

// createTask() function use for initializing all html tag..
let createTask = function(taskName) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    checkBox.type = "checkBox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskName;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

// addData() function for adding data to TODO list..
let addData = function() {
    if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
    }
    let listItem = createTask(taskInput.value);
    incompleteTasks.appendChild(listItem);
    bindAllTask(listItem, taskCompleted);
    taskInput.value = "";
}

// editData() function is used to edit the data from TODO list
let editData = function() {

    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");
    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}

// deleteData() is a function for delete data 
let deleteData = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// To check task is complete or not...
let taskCompleted = function() {
    let listItem = this.parentNode;
    completedTasks.appendChild(listItem);
    bindAllTask(listItem, taskIncomplete);
}

// To check task is complete or not...
let taskIncomplete = function() {
    let listItem = this.parentNode;
    incompleteTasks.appendChild(listItem);
    bindAllTask(listItem, taskCompleted);
}

// bind or append data...
let bindAllTask = function(taskListItem, checkBoxEventHandler) {
    let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    editButton.onclick = editData;
    deleteButton.onclick = deleteData;
    checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addData);