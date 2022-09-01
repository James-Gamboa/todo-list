const todos = [];

window.onload = () => {
  const form = document.getElementById("todo-form");
  // @ts-ignore
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    // @ts-ignore
    const todoText = todo.value;
    // @ts-ignore
    todo.value = "";
    todos.push(todoText);
    const todoList = document.getElementById("todo-list");
    // @ts-ignore
    todoList.innerHTML = "";
    for (let i =0 ; i < todos.length; i++) {
      // @ts-ignore
      todoList.innerHTML += "<li>" + todos [i] + "</li>";
    }
  }
}