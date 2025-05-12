function createTodo(title = "TODO", description, dueDate, priority = "low", status = "Not Completed") {

    const id = crypto.randomUUID()
    const getId = () => { return id }


    const togglePriority = (prioData) => {
        priority = prioData
    }

    const updateDueDate = (newDate) => {
        dueDate = newDate
    }

    const statusUpdate = () => {
        status = status === "Not Completed" ? "Completed" : "Not Completed"
    }

    //getters
    const getTitle = () => { return title }
    const getDescription = () => { return description }
    const getDueDate = () => { return dueDate }
    const getPriority = () => { return priority }
    const getStatus = () => { return status }

    return { getId, getTitle, getDescription, getDueDate, getPriority, getStatus, togglePriority, updateDueDate, statusUpdate }

}

export default createTodo