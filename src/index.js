document.addEventListener("DOMContentLoaded", () => {
//* grab input *//
//* prevent default *//
//* create html element li and delete button *//
//* attach input to ul to display on the DOM *//

  const taskForm = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks')

  taskForm.addEventListener('submit', function(event){
    event.preventDefault()
    const newTask = document.querySelector('#new-task-description')
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')
    const dueDate = document.querySelector('#due-date').value
    // const editButton = document.createElement('button')
    const prioritySelector = document.querySelector('#priority-selector').value

    li.innerText = newTask.value
    deleteButton.innerText = 'X'
    // editButton.innerText = 'Edit'
    taskList.appendChild(li)
    li.append(dueDate, deleteButton)
    taskForm.reset()

    if(prioritySelector === 'low'){
      return li.style.color = '#d4ab33'
    } else if (prioritySelector === 'medium'){
      return li.style.color = '#389c2f'
    } else if (prioritySelector === 'high'){
      return li.style.color = '#d11f1f'
    }
  
  
  });

  taskList.addEventListener('click', function(event){
    if (event.target.innerText === 'X')
      event.target.parentElement.remove()
  });

});
