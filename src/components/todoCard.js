
function createTodoCard(todo) {
    const todoCard = document.createElement("div")
    const cardTitle = document.createElement("h3")
    const date = document.createElement("p")
    const priority = document.createElement("p")
    const status = document.createElement("p")
    const description = document.createElement("p")
    const buttons = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    const toggleBtn = document.createElement("button")


    todoCard.classList.add("todo-card")
    cardTitle.classList.add("todo-title")
    date.classList.add("todo-due")
    priority.classList.add("todo-priority")
    status.classList.add("todo-status")
    description.classList.add("todo-description")
    buttons.classList.add("todo-actions")
    editBtn.classList.add("edit-btn")
    deleteBtn.classList.add("delete-btn")
    toggleBtn.classList.add("toggle-btn")
    priority.classList.add(`priority-${todo.getPriority().toLowerCase()}`)
    status.classList.add(todo.getStatus() === "Completed" ? "completed" : "not-completed")

    todoCard.dataset.id = todo.getId()
    cardTitle.textContent = todo.getTitle()
    date.innerHTML = `<strong>Due :</strong> ${todo.getDueDate()}`
    priority.innerHTML = `<strong>Priority :</strong> ${todo.getPriority()}`
    status.innerHTML = `<strong>Status :</strong> ${todo.getStatus()}`
    description.innerHTML = `<strong>Description :</strong> ${todo.getDescription()}`
    editBtn.textContent = "Edit"
    deleteBtn.textContent = "Delete"
    toggleBtn.textContent = "Change Status"

    buttons.appendChild(toggleBtn)
    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)
    todoCard.appendChild(cardTitle)
    todoCard.appendChild(date)
    todoCard.appendChild(priority)
    todoCard.appendChild(status)
    todoCard.appendChild(description)
    todoCard.appendChild(buttons)

    deleteBtn.addEventListener("click", () => {
        todoCard.remove();
        // Later: remove from localStorage
    });

    toggleBtn.addEventListener("click", () => {
        todo.statusUpdate();
        status.innerHTML = `<strong>Status :</strong> ${todo.getStatus()}`;
        status.classList.toggle("completed");
        status.classList.toggle("not-completed");

        // Later: update localStorage
    });

    editBtn.addEventListener("click", () => {
        // You'll build a custom form later, or pre-fill your existing dialog with current data
        alert("Edit not implemented yet!");
    });


    return todoCard
}

export default createTodoCard