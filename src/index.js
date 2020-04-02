// Your code here
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const newTask = document.createElement("li");
    newTask.innerHTML = description.value;
    tasks.append(newTask);
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    newTask.append(deleteButton);
    
    deleteButton.addEventListener("click", function(event) {
      event.target.parentNode.remove();
    });

    const priority = document.getElementById("priority-select");
    if (priority.value === "low") {
      return newTask.style.color = "yellow";
    } else if (priority.value === "medium") {
      return newTask.style.color = "green";
    } else {
      return newTask.style.color = "red";
    };
  });
});

/* DELIVERABLES:
1. √ An input field you can type a task into

2. √ A submit button

3. √ A task string that should appear on the DOM after the submit button has been activated

4. √ A delete function that will remove tasks from your list

5. √ A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
*/