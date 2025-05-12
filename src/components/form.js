function createForm() {
    const dialogForm = document.createElement("dialog")
    const form = document.createElement("form")
    const titleLabel = document.createElement("label")
    const descriptionLabel = document.createElement("label")
    const dateLabel = document.createElement("label")
    const lowLabel = document.createElement("label")
    const mediumLabel = document.createElement("label")
    const highLabel = document.createElement("label")
    const titleInput = document.createElement("input")
    const descriptionInput = document.createElement("textarea")
    const dateInput = document.createElement("input")
    const lowPriority = document.createElement("input")
    const highPriority = document.createElement("input")
    const mediumPriority = document.createElement("input")
    const addBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")
    const fieldset = document.createElement("fieldset")
    const legend = document.createElement("legend")
    const formButtons = document.createElement("div")

    titleInput.id = "title"
    descriptionInput.id = "description"
    dateInput.id = "dueDate"
    lowPriority.id = "low"
    mediumPriority.id = "medium"
    highPriority.id = "high"

    addBtn.classList.add("add-button")
    cancelBtn.classList.add("cancel-button")
    formButtons.classList.add("form-buttons")

    titleInput.setAttribute("type", "text")
    descriptionInput.setAttribute("rows", "4")
    descriptionInput.setAttribute("cols", "50")
    dateInput.setAttribute("type", "date")
    lowPriority.setAttribute("type", "radio")
    highPriority.setAttribute("type", "radio")
    mediumPriority.setAttribute("type", "radio")
    lowPriority.setAttribute("name", "priority")
    mediumPriority.setAttribute("name", "priority")
    highPriority.setAttribute("name", "priority")
    titleLabel.setAttribute("for", "title")
    descriptionLabel.setAttribute("for", "description")
    dateLabel.setAttribute("for", "date")
    lowLabel.setAttribute("for", "low")
    mediumLabel.setAttribute("for", "medium")
    highLabel.setAttribute("for", "high")
    addBtn.setAttribute("type", "submit")
    cancelBtn.setAttribute("type", "button")
    titleInput.required = true
    dateInput.required = true


    titleLabel.textContent = "Title"
    dateLabel.textContent = "Due date"
    descriptionLabel.textContent = "Description"
    lowLabel.textContent = "Low"
    mediumLabel.textContent = "Medium"
    highLabel.textContent = "High"
    addBtn.textContent = "Add"
    cancelBtn.textContent = "Cancel"
    legend.textContent = "Priority"

    fieldset.appendChild(legend)
    fieldset.appendChild(lowPriority)
    fieldset.appendChild(lowLabel)
    fieldset.appendChild(mediumPriority)
    fieldset.appendChild(mediumLabel)
    fieldset.appendChild(highPriority)
    fieldset.appendChild(highLabel)
    formButtons.appendChild(addBtn)
    formButtons.appendChild(cancelBtn)

    form.appendChild(titleLabel)
    form.appendChild(titleInput)
    form.appendChild(dateLabel)
    form.appendChild(dateInput)
    form.appendChild(fieldset)
    form.appendChild(descriptionLabel)
    form.appendChild(descriptionInput)
    form.appendChild(formButtons)
    dialogForm.appendChild(form)

    return dialogForm
}

export default createForm