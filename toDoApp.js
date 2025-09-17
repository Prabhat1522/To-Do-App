const input = document.getElementById("taskInput");
const list = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function render() {
  list.innerHTML = "";
  todos.forEach((task, i) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.textContent = task.text;
    // Toggle Done
    li.onclick = () => {
      todos[i].done = !todos[i].done;
      saveTodos();
      render();
    };
    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      todos.splice(i, 1);
      saveTodos();
      render();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function addTask() {
  const task = input.value.trim();
  if (task) {
    todos.push({ text: task, done: false });
    input.value = "";
    saveTodos();
    render();
  }
}
addBtn.addEventListener("click", addTask);
// Add task with Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
render();




// let todo=[];
// let req = prompt("Please Enter your request");
// console.log(req);

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req == "list"){
//         console.log("--------------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("--------------------");
//     }else if(req == "add"){
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete"){
//         let idx=prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }else{
//         console.log("wrong request");
//     }
//     req=prompt("Please Enter your request");
// }

