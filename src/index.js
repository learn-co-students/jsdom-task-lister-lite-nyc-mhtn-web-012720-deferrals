document.addEventListener("DOMContentLoaded", () => {
  // your code here
   const taskForm =  document.getElementById('create-task-form')
   const tasksList = document.getElementById('tasks')
   taskForm.addEventListener('submit', function(e){
     e.preventDefault()
     const newTask = document.getElementById("new-task-description").value
   
     const taskItem = document.createElement('li') 
     taskItem.innerText = newTask
     
    tasksList.appendChild(taskItem)
    taskForm.reset()
    const button = document.createElement('button')
    
    button.innerHTML = 'x'
    taskItem.appendChild(button)
    button.setAttribute('data-action', 'delete')
   })
   tasksList.addEventListener("click", function(e){
    if (e.target.dataset.action === 'delete')
      e.target.parentElement.remove()
   })
});
