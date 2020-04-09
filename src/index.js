document.addEventListener("DOMContentLoaded", () => {
//* grab input *//
//* prevent default *//
//* attach input to div to display on the DOM *//

let userInput = document.getElementById('new-task-description')
const submitButton = document.getElementById('create-task-form')
const taskList = document.getElementById('tasks')
const priority = document.getElementById('priority-selector')


  submitButton.addEventListener('submit', function(event){
    event.preventDefault()
    
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.id = 'delete'
    li.innerHTML = userInput.value
    deleteButton.innerHTML = 'X'
    taskList.appendChild(li)
    li.appendChild(deleteButton)
    userInput.value = ''
    
    deleteButton.addEventListener('click', function(event){
      event.target.parentNode.remove()
    })

    if (priority.value === 'low'){
      return li.style.color = "yellow"
    } else if (priority.value === 'medium'){
      return li.style.color = "green"
    } else if (priority.value === 'high'){
      return li.style.color = 'red'
    }

  });

});
