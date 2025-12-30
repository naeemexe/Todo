const myTasks = JSON.parse(localStorage.getItem('savedtask'));
if(myTasks === null){
    myTasks = []; }

function addTask() {
    const taskInput = document.querySelector('.js-input-task');
    const dateInput = document.querySelector('.js-date-input');
    myTasks.push({name : taskInput.value,
                  date : dateInput.value});
    taskInput.value = '';
    localStorage.setItem('savedtask',JSON.stringify(myTasks));
}
function showTask() {
    const html = '';
    for(index = 0; index < myTasks.length; index++) {
        html = html + `<div>${myTasks[index].name}</div>
                       <div>${myTasks[index].date}</div>   
                       <button onclick = "deleteTask(${index});" class = "delete-button"> Delete </button>`; }
    document.querySelector('.js-output-task').innerHTML = html;
}

function deleteTask(index) {
    myTasks.splice(index, 1);
    localStorage.setItem('savedtask',JSON.stringify(myTasks));
    showTask(); 
}
showTask();
