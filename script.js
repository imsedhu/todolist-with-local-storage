document.addEventListener("DOMContentLoaded", function(){
  const taskInput = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addTaskBtn");
  const taskList = document.querySelector("#taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//render tasks
function renderTasks(){
  taskList.innerHTML = "";
  tasks.map((task, index)=>{
    const li = document.createElement("li");
    li.textContent = task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', ()=> editTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', ()=> deleteTask(index));

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}


//add tasks
addBtn.addEventListener('click',()=>{
  const taskText = taskInput.value.trim();
  if(taskText !== ''){
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
  }
})

//edit task;
function editTask(index){
  let newEditedText = prompt('edit the task', tasks[index]);
  if(newEditedText !== ''){
    tasks[index] = newEditedText.trim();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

//delete task
function deleteTask(index){
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

//end of this rendertask fun called by refresh and get the fom localstorage and dispaly the appliaction
renderTasks();
});


