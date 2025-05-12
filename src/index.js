import "./styles.css";
import createForm from "./components/form";
import createTodoCard from "./components/todoCard";
import { createTopBar } from "./components/topBar";
import createTodo from "./todo";

const app = document.querySelector(".content");
const topBar = createTopBar();
const formDialog = createForm();
const todoContainer = document.createElement("div");
const newTodoBtn = topBar.querySelector(".new-todo");
const cancelBtn = formDialog.querySelector(".cancel-button");
const form = formDialog.querySelector("form");
let todos = [];

todoContainer.classList.add("todo-container");

app.appendChild(topBar);
app.appendChild(formDialog);
app.appendChild(todoContainer);

// Checking if localStorage is available
function storageAvailable(type) {
    try {
        const storage = window[type];
        const testKey = '__storage_test__';
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

function getTodosFromStorage() {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
}

function saveTodosToStorage(todos) {
    const plain = todos.map(todo => ({
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        priority: todo.getPriority(),
        status: todo.getStatus()
    }));
    localStorage.setItem("todos", JSON.stringify(plain));
}

// Load stored todos on page load
window.addEventListener("DOMContentLoaded", () => {
    if (!storageAvailable("localStorage")) return;

    const saved = getTodosFromStorage();
    todos = saved.map(data => createTodo(
        data.title,
        data.description,
        data.dueDate,
        data.priority,
        data.status
    ));

    todos.forEach(todo => {
        const card = createTodoCard(todo);
        card.dataset.id = todo.getId();
        const deleteBtn = card.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            const id = card.dataset.id;
            card.remove();
            todos = todos.filter(t => t.getId().toString() !== id);
            saveTodosToStorage(todos);
        });
        todoContainer.appendChild(card);
    });
});

newTodoBtn.addEventListener("click", () => {
    formDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    formDialog.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = form.querySelector("#title").value;
    const description = form.querySelector("#description").value;
    const dueDate = form.querySelector("#dueDate").value;
    const priority = form.querySelector("input[name='priority']:checked").id;

    const todo = createTodo(title, description, dueDate, priority);
    todos.push(todo);
    saveTodosToStorage(todos);

    const card = createTodoCard(todo);
    todoContainer.appendChild(card);

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
        const id = card.dataset.id;
        card.remove();
        todos = todos.filter(todo => todo.getId().toString() !== id);
        saveTodosToStorage(todos);
    });

    form.reset();
    formDialog.close();
});
