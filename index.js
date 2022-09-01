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
    console.log(todoText);
  }
}