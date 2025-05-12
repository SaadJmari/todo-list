
function createTopBar() {
    const topDiv = document.createElement("div")
    const newBtn = document.createElement("button")
    const title = document.createElement("h1")
    const searchBar = document.createElement("input")

    topDiv.classList.add("top-bar")
    newBtn.classList.add("new-todo")
    title.classList.add("title")
    searchBar.classList.add("search-bar")

    newBtn.textContent = "Add TODO"
    title.textContent = "My TODO list"

    newBtn.setAttribute("type", "submit")
    searchBar.setAttribute("type", "search")
    searchBar.disabled = "disabled"
    searchBar.setAttribute("placeholder", "Search Bar")

    topDiv.appendChild(title)
    topDiv.appendChild(newBtn)
    topDiv.appendChild(searchBar)

    return topDiv
}

export { createTopBar }