alert("Welcome to My Academic Planner! Click the close button to continue");

let developmentStartYear=2024
console.log('Development started in', developmentStartYear);
if(developmentStartYear>=2025){
    console.log('Going strong since 2024')
}
else {
    console.log('Established this year')
}

if (developmentStartYear < 2026 || developmentStartYear > 2024)
    console.log('Welcome to the great development period. You have yet to see what will come with this website.')

let developerName="Amelia Nandikesan"
console.log('Developed by' , developerName)

let numberOfFounders=1
let numberOfEmployees=0
let sum = numberOfEmployees + numberOfFounders
    console.log('Number of employees', sum)

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.ariaValueMax.trim();

    if (taskText ==="") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">X<`;
    li.addEventListener("click, toggleTask");

    document.getElementById("taskList").appendChild(li);
    saveTasks();

    taskInput.value-"";
}

function toggleTask(event) {
    event.target.classList.toggle("completed");
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        tasks.push({ text: task.innerText.replace("X", "").trim(), completed: task.classList.contains("completed") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task.text} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
        if (task.completed) li.classList.add("completed");
        li.addEventListener("click", toggleTask);
        document.getElementById("taskList").appendChild(li);
    });
}
