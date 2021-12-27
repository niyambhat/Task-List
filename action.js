let taskInput = document.querySelector("#taskInput");
let submitTask = document.querySelector("#submitTask");
let taskForm = document.querySelector("#taskForm");
let collection = document.querySelector("#collection");
let deleteBtn = document.querySelector(".delete-item");
let clear = document.querySelector(".clearTasks");
let filter = document.querySelector("#filter");

//Load Events
loadEventListener();

//events

function loadEventListener() {
  taskForm.addEventListener("submit", createTask);
  //     or
  //   submitTask.addEventListener("click", createTask);
  collection.addEventListener("click", deleteTask);

  //clear task events
  clear.addEventListener("click", removeAll);

  //filter tasks events
  filter.addEventListener("keyup", filterTask);
}

function createTask(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Please enter a task");
  }
  //create li element
  else if (taskInput.value != "") {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.innerHTML = taskInput.value;
    collection.appendChild(li);

    //delete link
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskInput.value = "";
  }
}

function deleteTask(e) {
  console.log(e.target.className);
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function removeAll(e) {
  e.preventDefault();
  collection.innerHTML = " ";
}

function filterTask(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
